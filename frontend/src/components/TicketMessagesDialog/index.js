import React, { useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import api from "../../services/api";
import toastError from "../../errors/toastError";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";
import MessagesList from "../MessagesList";
import { ReplyMessageProvider } from "../../context/ReplyingMessage/ReplyingMessageContext";
import TicketHeader from "../TicketHeader";
import TicketInfo from "../TicketInfo";
import { SocketContext } from "../../context/Socket/SocketContext";

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    position: "relative",
    overflow: "hidden",
  },

  mainWrapper: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeft: "0",
    marginRight: -drawerWidth,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  mainWrapperShift: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function TicketMessagesDialog({ open, handleClose, ticketId }) {
  const history = useHistory();
  const classes = useStyles();

  const { user } = useContext(AuthContext);

  const [, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState({});
  const [ticket, setTicket] = useState({});
  
  const socketManager = useContext(SocketContext);

  useEffect(() => {
    let delayDebounceFn = null;
    if (open) {
      setLoading(true);
      delayDebounceFn = setTimeout(() => {
        const fetchTicket = async () => {
          try {
            const { data } = await api.get("/tickets/" + ticketId);
            const { queueId } = data;
            const { queues, profile } = user;

            const queueAllowed = queues.find((q) => q.id === queueId);
            if (queueAllowed === undefined && profile !== "admin") {
              toast.error("Acesso não permitido");
              history.push("/tickets");
              return;
            }

            setContact(data.contact);
            setTicket(data);
            setLoading(false);
          } catch (err) {
            setLoading(false);
            toastError(err);
          }
        };
        fetchTicket();
      }, 500);
    }
    return () => {
      if (delayDebounceFn !== null) {
        clearTimeout(delayDebounceFn);
      }
    };
  }, [ticketId, user, history, open]);

  useEffect(() => {
    const companyId = localStorage.getItem("companyId");
    let socket = null;
    let onReturn = () => { };

    if (open) {
      socket = socketManager.GetSocket(companyId);

      const onConnectTicketMessagesDialog = () => {
        socket.emit("joinChatBox", `${ticket.id}`);
      }

      const onCompanyTicketMessagesDialog = (data) => {
        if (data.action === "update" && data.ticket.id === ticket.id) {
          setTicket(data.ticket);
        }

        if (data.action === "delete" && data.ticketId === ticket.id) {
          history.push("/tickets");
        }
      }

      const onCompanyContactMessagesDialog = (data) => {
        if (data.action === "update") {
          setContact((prevState) => {
            if (prevState.id === data.contact?.id) {
              return { ...prevState, ...data.contact };
            }
            return prevState;
          });
        }
      }

      onReturn = () => {
        if (socket !== null) {
          socket.disconnect();
        }
      }

      socketManager.onConnect(onConnectTicketMessagesDialog);
      socket.on(`company-${companyId}-ticket`, onCompanyTicketMessagesDialog);
      socket.on(`company-${companyId}-contact`, onCompanyContactMessagesDialog);
    }

    return onReturn;
  }, [ticketId, ticket, history, open, socketManager]);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const renderTicketInfo = () => {
    if (ticket.user !== undefined) {
      return (
        <TicketInfo
          contact={contact}
          ticket={ticket}
          onClick={handleDrawerOpen}
        />
      );
    }
  };

  const renderMessagesList = () => {
    return (
      <Box className={classes.root}>
        <MessagesList
          ticket={ticket}
          ticketId={ticket.id}
          isGroup={ticket.isGroup}
        ></MessagesList>
      </Box>
    );
  };

  return (
    <Dialog maxWidth="md" onClose={handleClose} open={open}>
      <TicketHeader loading={loading}>{renderTicketInfo()}</TicketHeader>
      <ReplyMessageProvider>{renderMessagesList()}</ReplyMessageProvider>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Tutup
        </Button>
      </DialogActions>
    </Dialog>
  );
}
