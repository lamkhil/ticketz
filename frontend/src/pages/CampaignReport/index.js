import React, { useEffect, useRef, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import MainContainer from "../../components/MainContainer";
import MainHeader from "../../components/MainHeader";
import Title from "../../components/Title";

import { Grid, LinearProgress, Typography } from "@material-ui/core";
import api from "../../services/api";
import { has, get, isNull } from "lodash";
import CardCounter from "../../components/Dashboard/CardCounter";
import GroupIcon from "@material-ui/icons/Group";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import DoneIcon from "@material-ui/icons/Done";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { useDate } from "../../hooks/useDate";

import { SocketContext } from "../../context/Socket/SocketContext";

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    flex: 1,
    padding: theme.spacing(2),
    overflowY: "scroll",
    ...theme.scrollbarStyles,
  },
  textRight: {
    textAlign: "right",
  },
  tabPanelsContainer: {
    padding: theme.spacing(2),
  },
}));

const CampaignReport = () => {
  const classes = useStyles();

  const { campaignId } = useParams();

  const [campaign, setCampaign] = useState({});
  const [validContacts, setValidContacts] = useState(0);
  const [delivered, setDelivered] = useState(0);
  const [confirmationRequested, setConfirmationRequested] = useState(0);
  const [confirmed, setConfirmed] = useState(0);
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false);
  const mounted = useRef(true);

  const { datetimeToClient } = useDate();

  const socketManager = useContext(SocketContext);

  useEffect(() => {
    if (mounted.current) {
      findCampaign();
    }

    return () => {
      mounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPercent((delivered / validContacts) * 100);
  }, [delivered, validContacts]);

  useEffect(() => {
    const companyId = localStorage.getItem("companyId");
    const socket = socketManager.GetSocket(companyId);

    const onCampaign = (data) => {
      if (data.campaign?.id === +campaignId) {
        setCampaign(data.campaign);
        setValidContacts(data.valids);
        setConfirmationRequested(data.confirmationRequested);
        setConfirmed(data.confirmed);
        setDelivered(data.delivered);

        if (data.campaign.status === "FINALIZADA") {
          setTimeout(() => {
            findCampaign();
          }, 5000);
        }
      }
    }

    socket.on(`company-${companyId}-campaign`, onCampaign);
    
    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campaignId, socketManager]);

  const findCampaign = async () => {
    setLoading(true);
    const { data } = await api.get(`/campaigns/${campaignId}`);
    setCampaign(data.campaign);
    setValidContacts(data.valids);
    setConfirmationRequested(data.confirmationRequested);
    setConfirmed(data.confirmed);
    setDelivered(data.delivered);
    setLoading(false);
  };

  const formatStatus = (val) => {
    switch (val) {
      case "INATIVA":
        return "Inativa";
      case "PROGRAMADA":
        return "Programada";
      case "EM_ANDAMENTO":
        return "Em Andamento";
      case "CANCELADA":
        return "Cancelada";
      case "FINALIZADA":
        return "Finalizada";
      default:
        return val;
    }
  };

  return (
    <MainContainer>
      <MainHeader>
        <Grid style={{ width: "99.6%" }} container>
          <Grid xs={12} item>
            <Title>Relatório da {campaign.name || "Campanha"}</Title>
          </Grid>
        </Grid>
      </MainHeader>
      <Paper className={classes.mainPaper} variant="outlined">
        <Typography variant="h6" component="h2">
          Status: {formatStatus(campaign.status)} {delivered} de {validContacts}
        </Typography>
        <Grid spacing={2} container>
          <Grid xs={12} item>
            <LinearProgress
              variant="determinate"
              style={{ height: 15, borderRadius: 3, margin: "20px 0" }}
              value={percent}
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <CardCounter
              icon={<GroupIcon fontSize="inherit" />}
              title="Contatos Válidos"
              value={validContacts}
              loading={loading}
            />
          </Grid>
          {campaign.confirmation && (
            <>
              <Grid xs={12} md={4} item>
                <CardCounter
                  icon={<DoneIcon fontSize="inherit" />}
                  title="Konfirmasi Diminta"
                  value={confirmationRequested}
                  loading={loading}
                />
              </Grid>
              <Grid xs={12} md={4} item>
                <CardCounter
                  icon={<DoneAllIcon fontSize="inherit" />}
                  title="Konfirmasi"
                  value={confirmed}
                  loading={loading}
                />
              </Grid>
            </>
          )}
          <Grid xs={12} md={4} item>
            <CardCounter
              icon={<CheckCircleIcon fontSize="inherit" />}
              title="Entregues"
              value={delivered}
              loading={loading}
            />
          </Grid>
          {campaign.whatsappId && (
            <Grid xs={12} md={4} item>
              <CardCounter
                icon={<WhatsAppIcon fontSize="inherit" />}
                title="Conexão"
                value={campaign.whatsapp.name}
                loading={loading}
              />
            </Grid>
          )}
          {campaign.contactListId && (
            <Grid xs={12} md={4} item>
              <CardCounter
                icon={<ListAltIcon fontSize="inherit" />}
                title="Lista de Contatos"
                value={campaign.contactList.name}
                loading={loading}
              />
            </Grid>
          )}
          <Grid xs={12} md={4} item>
            <CardCounter
              icon={<ScheduleIcon fontSize="inherit" />}
              title="Agendamento"
              value={datetimeToClient(campaign.scheduledAt)}
              loading={loading}
            />
          </Grid>
          <Grid xs={12} md={4} item>
            <CardCounter
              icon={<EventAvailableIcon fontSize="inherit" />}
              title="Conclusão"
              value={datetimeToClient(campaign.completedAt)}
              loading={loading}
            />
          </Grid>
        </Grid>
      </Paper>
    </MainContainer>
  );
};

export default CampaignReport;
