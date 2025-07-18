import React, { useState, useRef, useEffect, useContext } from "react";
import { useTheme } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import useSound from "use-sound";

import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import ChatIcon from "@material-ui/icons/Chat";

import TicketListItem from "../TicketListItem";
import { i18n } from "../../translate/i18n";
import useTickets from "../../hooks/useTickets";
import alertSound from "../../assets/sound.mp3";
import { AuthContext } from "../../context/Auth/AuthContext";
import { SocketContext } from "../../context/Socket/SocketContext";
import Favicon from "react-favicon";
import { getBackendURL } from "../../services/config";
import useSettings from "../../hooks/useSettings";

const defaultLogoFavicon = "/vector/favicon.svg";

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    overflowY: "auto",
    maxHeight: 350,
    ...theme.scrollbarStyles,
  },
  popoverPaper: {
    width: "100%",
    maxWidth: 350,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 270,
    },
  },
  noShadow: {
    boxShadow: "none !important",
  },
}));

const NotificationsPopOver = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const history = useHistory();
  const { user } = useContext(AuthContext);
  const ticketIdUrl = +history.location.pathname.split("/")[2];
  const ticketIdRef = useRef(ticketIdUrl);
  const anchorEl = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [soundGroupNotifications, setSoundGroupNotifications] = useState(false);
  const [showTabGroups, setShowTabGroups] = useState(false);
  const { profile, queues } = user;

  const [, setDesktopNotifications] = useState([]);

  const { tickets } = useTickets({ notClosed: "true", withUnreadMessages: "true" });
  const [play] = useSound(alertSound, {volume: props.volume});
  const soundAlertRef = useRef();
  const { getSetting } = useSettings();

  const historyRef = useRef(history);
  
  const socketManager = useContext(SocketContext);

  
  function clearTicket(ticketId) {
    setNotifications(prevState => {
      const ticketIndex = prevState.findIndex(t => t.id === ticketId);
      if (ticketIndex !== -1) {
        prevState.splice(ticketIndex, 1);
        return [...prevState];
      }
      return prevState;
    });

    setDesktopNotifications(prevState => {
      const notfiticationIndex = prevState.findIndex(
        n => n.tag === String(ticketId)
      );
      if (notfiticationIndex !== -1) {
        prevState[notfiticationIndex].close();
        prevState.splice(notfiticationIndex, 1);
        return [...prevState];
      }
      return prevState;
    });
  }
  
  useEffect(() => {
    getSetting("soundGroupNotifications").then((soundGroupNotifications) => {
      setSoundGroupNotifications(soundGroupNotifications === "enabled");
    });

    Promise.all([
      getSetting("CheckMsgIsGroup"),
      getSetting("groupsTab")
    ]).then(([ignoreGroups, groupsTab]) => {
      setShowTabGroups(ignoreGroups === "disabled" && groupsTab === "enabled");
    });
  }, []);

	useEffect(() => {
		soundAlertRef.current = play;

		if (!("Notification" in window)) {
			console.log("This browser doesn't support notifications");
		} else {
			Notification.requestPermission();
		}
	}, [play]);

	useEffect(() => {
		setNotifications(tickets);
	}, [tickets]);

	useEffect(() => {
		ticketIdRef.current = ticketIdUrl;
	}, [ticketIdUrl]);

  useEffect(() => {
    const companyId = localStorage.getItem("companyId");
    const socket = socketManager.GetSocket(companyId);

    const queueIds = queues.map((q) => q.id);

    const onConnectNotificationsPopover = () => {
      socket.emit("joinNotification");
    }

    const onCompanyTicketNotificationsPopover = (data) => {
      if (data.action === "update" || data.ticket?.status === "closed") {
        clearTicket(data.ticket.id);
      }

      if (data.action === "updateUnread" || data.action === "delete") {
        clearTicket(data.ticketId);
      }
    };

    const onCompanyAppMessageNotificationsPopover = (data) => {

      if (
        data.action === "create" &&
        !data.message.read &&
        (data.ticket.userId === user?.id || !data.ticket.userId)
      ) {
        setNotifications(prevState => {
          const ticketIndex = prevState.findIndex(t => t.id === data.ticket.id);
          if (ticketIndex !== -1) {
            prevState[ticketIndex] = data.ticket;
            return [...prevState];
          }
          return [data.ticket, ...prevState];
        });

        const shouldNotNotificate =
          (data.message.ticketId === ticketIdRef.current &&
            document.visibilityState === "visible") ||
          (data.ticket.userId && data.ticket.userId !== user?.id) ||
          (data.ticket.isGroup && !soundGroupNotifications);

        if (shouldNotNotificate) return;

        handleNotifications(data);
      }
    }

    socketManager.onConnect(onConnectNotificationsPopover);
    socket.on(`company-${companyId}-ticket`, onCompanyTicketNotificationsPopover);
    socket.on(`company-${companyId}-appMessage`, onCompanyAppMessageNotificationsPopover);

    return () => {
      socket.disconnect();
    };
  }, [user, profile, queues, soundGroupNotifications, socketManager]);

  const handleNotifications = (data) => {
    const { message, contact, ticket } = data;

    const body = message.body.startsWith('{"ticketzvCard"') ? "🪪" : message.body;

    const options = {
      body: `${format(new Date(), "HH:mm")}\n${body}`,
      icon: contact.profilePicUrl,
      tag: ticket.id,
      renotify: true,
    };

    try {
    const notification = new Notification(
      `${i18n.t("tickets.notification.message")} ${contact.name}`,
      options
    );

    notification.onclick = (e) => {
      e.preventDefault();
      window.focus();
      historyRef.current.push(`/tickets/${ticket.uuid}`);
    };

    setDesktopNotifications((prevState) => {
      const notfiticationIndex = prevState.findIndex(
        (n) => n.tag === notification.tag
      );
      if (notfiticationIndex !== -1) {
        prevState[notfiticationIndex] = notification;
        return [...prevState];
      }
      return [notification, ...prevState];
    });
    } catch (e) {
      console.error("Failed to push browser notification");
    }

    soundAlertRef.current();
  };

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickAway = () => {
    setIsOpen(false);
  };

  const NotificationTicket = ({ children }) => {
    return <div onClick={handleClickAway}>{children}</div>;
  };

  const browserNotification = () => {
	const numbers = "⓿➊➋➌➍➎➏➐➑➒➓⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴";
    if (notifications.length > 0) {
      if (notifications.length < 21) {
        document.title = numbers.substring(notifications.length, notifications.length + 1) + " - " + (theme.appName || "...");
      } else {
        document.title = "(" + notifications.length + ")" + (theme.appName || "...");
      }
    } else {
      document.title = theme.appName || "...";
    }
    return (
      <>
        <Favicon
          animated={true}
          url={ (theme?.appLogoFavicon) ? theme.appLogoFavicon : defaultLogoFavicon }
          alertCount={notifications.length}
          iconSize={195}
        />
      </>
    );
  };

  return (
    <>
      {browserNotification()}
      <IconButton
        onClick={handleClick}
        
        ref={anchorEl}
        aria-label="Tampilkan Notifikasi"
        variant="contained"

      >
          <ChatIcon style={{ color: "white" }} />
        {notifications.length > 0 ?<Badge variant="dot" color="secondary"
        style={{marginTop: "-25px"}}>
        </Badge>: ""}
      </IconButton>
      <Popover
        disableScrollLock
        open={isOpen}
        anchorEl={anchorEl.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classes={{ paper: classes.popoverPaper }}
        onClose={handleClickAway}
      >
        <List dense className={classes.tabContainer}>
          {notifications.length === 0 ? (
            <ListItem>
              <ListItemText>{i18n.t("notifications.noTickets")}</ListItemText>
            </ListItem>
          ) : (
            notifications.map((ticket) => (
              <NotificationTicket key={ticket.id}>
                <TicketListItem ticket={ticket} groupActionButtons={!showTabGroups} />
              </NotificationTicket>
            ))
          )}
        </List>
      </Popover>
    </>
  );
};

export default NotificationsPopOver;
