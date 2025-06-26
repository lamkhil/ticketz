import React, { useState, useEffect } from "react";


import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Link,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";

import { i18n } from "../../translate/i18n";
import useAuth from "../../hooks/useAuth.js";
import { useTheme } from "@material-ui/core/styles";

import { loadJSON } from "../../helpers/loadJSON";
import api from "../../services/api";

const frontendGitInfo = loadJSON('/gitinfo.json');
const logo = "/vector/logo.svg";
const logoDark = "/vector/logo-dark.svg";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
	},
	multFieldLine: {
		display: "flex",
		"& > *:not(:last-child)": {
			marginRight: theme.spacing(1),
		},
	},
  logoImg: {
    width: "100%",
    margin: "0 auto",
    content: `url("${theme.calculatedLogo()}")`
  },
  ticketzLogoImg: {
    width: "100%",
    margin: "0 auto",
    content: "url(" + (theme.mode === "light" ? logo : logoDark) + ")"
  },
  textCenter: {
    textAlign: "center",
  }

}));

const AboutModal = ({ open, onClose }) => {
	const classes = useStyles();
  const { getCurrentUserInfo } = useAuth();
  const [currentUser, setCurrentUser] = useState({});
  const [backendGitInfo, setBackendGitInfo] = useState(null);
  const theme = useTheme();

	const handleClose = () => {
		onClose();
	};

  useEffect(() => {
    getCurrentUserInfo().then((user) => {
      setCurrentUser(user);
    });

    api.get("/").then((response) => {
      setBackendGitInfo(response.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

	return (
		<div className={classes.root}>
			<Dialog
				open={open}
				onClose={handleClose}
				maxWidth="sm"
				fullWidth
				scroll="paper"
			>
				<DialogTitle id="form-dialog-title">
					{i18n.t("about.aboutthe")} {theme.appName}
				</DialogTitle>
				<DialogContent dividers>
          <div>
            <img className={classes.logoImg} />
          </div>

          <Typography variant="body1" gutterBottom>
            <b>Takon Sobat</b> dikembangkan oleh <b>Muhammad Lamkhil Bashor</b> dari 
            <b> Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP) Kota Surabaya</b> 
            sebagai aplikasi layanan masyarakat berbasis tiket dengan pendekatan percakapan digital.
          </Typography>

          <Typography variant="body1" gutterBottom>
            Aplikasi ini dibangun di atas proyek open source 
            <Link target="_blank" href="https://github.com/ticketz-oss/ticketz"> Ticketz</Link>, 
            yang merupakan pengembangan lanjutan dari 
            <Link target="_blank" href="https://github.com/canove/whaticket-community"> Whaticket</Link>.
          </Typography>

          <Typography variant="body1" gutterBottom>
            Pengembangan <b>Takon Sobat</b> tunduk pada lisensi 
            <Link target="_blank" href="https://www.gnu.org/licenses/agpl-3.0.html"> GNU AGPL v3</Link>. 
            Sesuai dengan lisensi ini, kode sumber dapat diakses dan dimodifikasi secara terbuka, 
            selama atribusi kepada pengembang asli tetap dijaga.
          </Typography>

          <Typography variant="body1" gutterBottom>
            Versi backend:{" "}
            {backendGitInfo ? (
              backendGitInfo.tagName ? (
                `Version: ${backendGitInfo.tagName} (Build: ${backendGitInfo.buildTimestamp})`
              ) : (
                <>
                  {backendGitInfo.commitHash && `Commit: ${backendGitInfo.commitHash} `}
                  {backendGitInfo.branchName && `Branch: ${backendGitInfo.branchName} `}
                  {backendGitInfo.commitTimestamp && `Time: ${backendGitInfo.commitTimestamp}`}
                </>
              )
            ) : (
              "Memuat info versi..."
            )}
          </Typography>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleClose}
            type="submit"
            color="primary"
            variant="contained"
					>
						{i18n.t("about.buttonclose")}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};



export default AboutModal;
