const messages = {
  pt_PT: {
    translations: {
      common: {
        search: "Pesquisar",
        filter: "Filtrar",
        edit: "Editar",
        delete: "Eliminar",
        cancel: "Batalkan",
        save: "Guardar",
        confirm: "Confirmar",
        close: "Tutup",
        error: "Erro",
        success: "Sucesso",
        actions: "Aksi",
        add: "Tambah",
        name: "Nome",
        email: "Email",
        phone: "Telefone",
        company: "Empresa",
        user: "Utilizador",
        connection: "Conexão",
        queue: "Fila",
        contact: "Contacto",
        whatsappNumber: "Número do Whatsapp",
        dueDate: "Data de vencimento",
        copy: "Copiar",
        paste: "Colar",
        proceed: "Prosseguir",        
      },
      signup: {
        title: "Registar",
        toasts: {
          success: "Utilizador criado com sucesso! Faça o seu login!!!",
          fail: "Erro ao criar utilizador. Verifique os dados fornecidos.",
        },
        form: {
          name: "Nome",
          email: "Email",
          password: "Palavra-passe",
        },
        buttons: {
          submit: "Registar",
          login: "Já tem uma conta? Entre!",
        },
      },
      login: {
        title: "Entrar",
        form: {
          email: "Email",
          password: "Palavra-passe",
        },
        buttons: {
          submit: "Entrar",
          register: "Não tem uma conta? Registe-se!",
        },
      },
      companies: {
        title: "Registar Empresa",
        form: {
          name: "Nome da Empresa",
          plan: "Plano",
          token: "Token",
          submit: "Registar",
          success: "Empresa criada com sucesso!",
        },
      },
      auth: {
        toasts: {
          success: "Login efetuado com sucesso!",
        },
        token: "Token",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Atendimentos hoje: ",
          },
        },
      },
      connections: {
        title: "Conexões",
        toasts: {
          deleted: "Conexão com o WhatsApp excluída com sucesso!",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Tem a certeza? Esta ação não pode ser revertida.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "Tem a certeza? Terá de ler o QR Code novamente.",
        },
        buttons: {
          add: "Tambah WhatsApp",
          disconnect: "Desconectar",
          tryAgain: "Tentar novamente",
          qrcode: "QR CODE",
          newQr: "Novo QR CODE",
          connecting: "A conectar",
        },
        toolTips: {
          disconnected: {
            title: "Falha ao iniciar sessão do WhatsApp",
            content:
              "Certifique-se de que o seu telemóvel está conectado à internet e tente novamente, ou solicite um novo QR Code",
          },
          qrcode: {
            title: "A aguardar leitura do QR Code",
            content:
              "Clique no botão 'QR CODE' e leia o QR Code com o seu telemóvel para iniciar a sessão",
          },
          connected: {
            title: "Conexão estabelecida!",
          },
          timeout: {
            title: "A conexão com o telemóvel foi perdida",
            content:
              "Certifique-se de que o seu telemóvel está conectado à internet e o WhatsApp está aberto, ou clique no botão 'Desconectar' para obter um novo QR Code",
          },
        },
        table: {
          name: "Nome",
          status: "Estado",
          lastUpdate: "Última atualização",
          default: "Padrão",
          actions: "Aksi",
          session: "Sessão",
        },
      },
      internalChat: {
        title: "Chat Interno",
      },
      whatsappModal: {
        title: {
          add: "Tambah WhatsApp",
          edit: "Editar WhatsApp",
        },
        form: {
          name: "Nome",
          default: "Padrão",
        },
        buttons: {
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batalkan",
        },
        success: "WhatsApp salvo com sucesso.",
      },
      qrCode: {
        message: "Leia o QrCode para iniciar a sessão",
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "Contacto excluído com sucesso!",
        },
        searchPlaceholder: "Pesquisar...",
        confirmationModal: {
          deleteTitle: "Eliminar",
          importTitlte: "Importar contactos",
          deleteMessage: "InterAksi relacionadas serão perdidas.",
          importMessage: "Deseja importar todos os contactos do telefone?",
        },
        buttons: {
          import: "Importar Contactos",
          add: "Tambah Contacto",
        },
        table: {
          name: "Nome",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Aksi",
        },
      },
      contactModal: {
        title: {
          add: "Tambah contacto",
          edit: "Editar contacto",
        },
        form: {
          mainInfo: "Dados do contacto",
          extraInfo: "InformAksi adicionais",
          name: "Nome",
          number: "Número do WhatsApp",
          email: "Email",
          extraName: "Nome do campo",
          extraValue: "Valor",
          disableBot: "Desativar chatbot",
        },
        buttons: {
          addExtraInfo: "Tambah informação",
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batalkan",
        },
        success: "Contacto salvo com sucesso.",
      },
      queueModal: {
        title: {
          add: "Tambah fila",
          edit: "Editar fila",
        },
        form: {
          name: "Nome",
          color: "Cor",
          greetingMessage: "Pesan de saudação",
          complationMessage: "Pesan de conclusão",
          outOfHoursMessage: "Pesan fora de expediente",
          ratingMessage: "Pesan de avaliação",
          transferMessage: "Pesan de Transferência",
          token: "Token",
        },
        buttons: {
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batalkan",
          attach: "Anexar Ficheiro",
        },
        serviceHours: {
          dayWeek: "Dia da semana",
          startTimeA: "Hora Inicial - Turno A",
          endTimeA: "Hora Final - Turno A",
          startTimeB: "Hora Inicial - Turno B",
          endTimeB: "Hora Final - Turno B",
          monday: "Segunda-feira",
          tuesday: "Terça-feira",
          wednesday: "Quarta-feira",
          thursday: "Quinta-feira",
          friday: "Sexta-feira",
          saturday: "Sábado",
          sunday: "Domingo",
        },
      },
      userModal: {
        title: {
          add: "Tambah utilizador",
          edit: "Editar utilizador",
        },
        form: {
          name: "Nome",
          email: "Email",
          password: "Palavra-passe",
          profile: "Perfil",
        },
        buttons: {
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batalkan",
        },
        success: "Utilizador salvo com sucesso.",
      },
      scheduleModal: {
        title: {
          add: "Novo Agendamento",
          edit: "Editar Agendamento",
        },
        form: {
          body: "Pesan",
          contact: "Contacto",
          sendAt: "Data de Agendamento",
          sentAt: "Data de Envio",
          saveMessage: "Simpan Pesan no Ticket",
        },
        buttons: {
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batalkan",
        },
        success: "Agendamento salvo com sucesso.",
      },
      tagModal: {
        title: {
          add: "Baru Tag",
          edit: "Editar Tag",
          addKanban: "Baru Lane",
          editKanban: "Editar Lane",
        },
        form: {
          name: "Nome",
          color: "Cor",
          kanban: "Kanban",
        },
        buttons: {
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batalkan",
        },
        success: "Tag salva com sucesso.",
        successKanban: "Lane salva com sucesso.",
      },
      chat: {
        noTicketMessage: "Selecione um ticket para começar a conversar.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "ARRASTE E SOLTE FICHEIROS NO CAMPO ABAIXO",
          titleFileList: "Lista de ficheiros",
        },
      },
      ticketsManager: {
        buttons: {
          newTicket: "Novo",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Filas",
      },
      tickets: {
        toasts: {
          deleted: "O atendimento que estava a gerir foi eliminado.",
        },
        notification: {
          message: "Pesan de",
        },
        tabs: {
          open: { title: "Abertos" },
          closed: { title: "Resolvidos" },
          groups: { title: "Grupos" },
          search: { title: "Busca" },
        },
        search: {
          placeholder: "Buscar atendimento e mensagens",
        },
        buttons: {
          showAll: "Todos",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Digite para buscar utilizadores",
        fieldQueueLabel: "Transferir para fila",
        fieldQueuePlaceholder: "Selecione uma fila",
        noOptions: "Nenhum utilizador encontrado com esse nome",
        buttons: {
          ok: "Transferir",
          cancel: "Batalkan",
        },
      },
      ticketsList: {
        pendingHeader: "Aguardando",
        assignedHeader: "Em atendimento",
        noTicketsTitle: "Nada aqui!",
        noTicketsMessage:
          "Nenhum atendimento encontrado com este estado ou termo pesquisado",
        buttons: {
          accept: "Aceitar",
        },
      },
      newTicketModal: {
        title: "Criar Ticket",
        fieldLabel: "Digite para pesquisar o contacto",
        add: "Tambah",
        buttons: {
          ok: "Simpan",
          cancel: "Batalkan",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          connections: "Conexões",
          tickets: "Atendimentos",
          quickMessages: "Respostas Cepat",
          contacts: "Contactos",
          queues: "Filas & Chatbot",
          tags: "Tags",
          administration: "Administração",
          service: "Serviço",
          users: "Utilizadores",
          settings: "Pengaturan",
          helps: "Ajuda",
          messagesAPI: "API",
          schedules: "Agendamentos",
          campaigns: "Campanhas",
          annoucements: "InformAktifs",
          chats: "Chat Interno",
          financeiro: "Financeiro",
          logout: "Sair",
          management: "Gestão",
          kanban: "Kanban",
        },
        appBar: {
          i18n: {
            language: "Português 🇵🇹",
            language_short: "pt_PT",
          },
          user: {
            profile: "Perfil",
            darkmode: "Modo escuro",
            lightmode: "Modo claro",
            language: "Selecionar idioma",
            about: "Sobre",
            logout: "Sair",
          },
        },
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Número",
          body: "Pesan",
          token: "Token registado",
        },
        mediaMessage: {
          number: "Número",
          body: "Nome do ficheiro",
          media: "Ficheiro",
          token: "Token registado",
        },
      },
      notifications: {
        noTickets: "Nenhuma notificação.",
      },
      quickMessages: {
        title: "Respostas Cepat",
        buttons: {
          add: "Baru Resposta",
        },
        dialog: {
          shortcode: "Pintasan",
          message: "Resposta",
        },
      },
      kanban: {
        title: "Kanban",
        searchPlaceholder: "Pesquisa",
        subMenus: {
          list: "Painel",
          tags: "Lanes",
        },
      },
      tagsKanban: {
        title: "Lanes",
        laneDefault: "Em aberto",
        confirmationModal: {
          deleteTitle: "Tem a certeza que quer excluir esta Lane?",
          deleteMessage: "Esta ação não pode ser revertida.",
        },
        table: {
          name: "Nome",
          color: "Cor",
          tickets: "Tickets",
          actions: "Aksi",
        },
        buttons: {
          add: "Baru Lane",
        },
        toasts: {
          deleted: "Lane excluída com sucesso.",
        },
      },
      contactLists: {
        title: "Listas de Contactos",
        table: {
          name: "Nome",
          contacts: "Contactos",
          actions: "Aksi",
        },
        buttons: {
          add: "Baru Lista",
        },
        dialog: {
          name: "Nome",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Tambah",
          add: "Tambah",
          edit: "Editar",
          cancel: "Batalkan",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta ação não pode ser revertida.",
        },
        toasts: {
          deleted: "Registro excluído",
          created: "Registro criado",
        },
      },
      contactListItems: {
        title: "Contactos",
        searchPlaceholder: "Pesquisa",
        buttons: {
          add: "Novo",
          lists: "Listas",
          import: "Importar",
        },
        dialog: {
          name: "Nome",
          number: "Número",
          whatsapp: "WhatsApp",
          email: "Email",
          okEdit: "Editar",
          okAdd: "Tambah",
          add: "Tambah",
          edit: "Editar",
          cancel: "Batalkan",
        },
        table: {
          name: "Nome",
          number: "Número",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Aksi",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta ação não pode ser revertida.",
          importMessage: "Deseja importar os contactos desta planilha?",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "Registro excluído",
        },
      },
      campaigns: {
        title: "Campanhas",
        searchPlaceholder: "Pesquisa",
        buttons: {
          add: "Baru Campanha",
          contactLists: "Listas de Contactos",
        },
        table: {
          name: "Nome",
          whatsapp: "Conexão",
          contactList: "Lista de Contactos",
          status: "Estado",
          scheduledAt: "Agendamento",
          completedAt: "Concluída",
          confirmation: "Confirmação",
          actions: "Aksi",
        },
        dialog: {
          new: "Baru Campanha",
          update: "Editar Campanha",
          readonly: "Apenas Visualização",
          form: {
            name: "Nome",
            message1: "Pesan 1",
            message2: "Pesan 2",
            message3: "Pesan 3",
            message4: "Pesan 4",
            message5: "Pesan 5",
            confirmationMessage1: "Pesan de Confirmação 1",
            confirmationMessage2: "Pesan de Confirmação 2",
            confirmationMessage3: "Pesan de Confirmação 3",
            confirmationMessage4: "Pesan de Confirmação 4",
            confirmationMessage5: "Pesan de Confirmação 5",
            messagePlaceholder: "Konten da Pesan",
            whatsapp: "Conexão",
            status: "Estado",
            scheduledAt: "Agendamento",
            confirmation: "Confirmação",
            contactList: "Lista de Contactos",
          },
          buttons: {
            add: "Tambah",
            edit: "Atualizar",
            okadd: "Ok",
            cancel: "Batalkan Envios",
            restart: "Reiniciar Envios",
            close: "Tutup",
            attach: "Anexar Ficheiro",
          },
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta ação não pode ser revertida.",
        },
        toasts: {
          success: "Operação realizada com sucesso",
          cancel: "Campanha cancelada",
          restart: "Campanha reiniciada",
          deleted: "Registro excluído",
        },
      },
      announcements: {
        title: "InformAktifs",
        searchPlaceholder: "Pesquisa",
        buttons: {
          add: "Novo InformAktif",
          contactLists: "Listas de InformAktifs",
        },
        table: {
          priority: "Prioridade",
          title: "Judul",
          text: "Texto",
          mediaName: "Ficheiro",
          status: "Estado",
          actions: "Aksi",
        },
        dialog: {
          edit: "Edição de InformAktif",
          add: "Novo InformAktif",
          update: "Editar InformAktif",
          readonly: "Apenas Visualização",
          form: {
            priority: "Prioridade",
            title: "Judul",
            text: "Texto",
            mediaPath: "Ficheiro",
            status: "Estado",
          },
          buttons: {
            add: "Tambah",
            edit: "Atualizar",
            okadd: "Ok",
            cancel: "Batalkan",
            close: "Tutup",
            attach: "Anexar Ficheiro",
          },
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta ação não pode ser revertida.",
        },
        toasts: {
          success: "Operação realizada com sucesso",
          deleted: "Registro excluído",
        },
      },
      campaignsConfig: {
        title: "Pengaturan de Campanhas",
      },
      queues: {
        title: "Filas & Chatbot",
        table: {
          name: "Nome",
          color: "Cor",
          greeting: "Pesan de saudação",
          actions: "Aksi",
        },
        buttons: {
          add: "Tambah fila",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage:
            "Tem a certeza? Esta ação não pode ser revertida! Os atendimentos desta fila continuarão a existir, mas não terão mais nenhuma fila atribuída.",
        },
      },
      queueSelect: {
        inputLabel: "Filas",
      },
      users: {
        title: "Utilizadores",
        table: {
          name: "Nome",
          email: "Email",
          profile: "Perfil",
          actions: "Aksi",
        },
        buttons: {
          add: "Tambah utilizador",
        },
        toasts: {
          deleted: "Utilizador excluído com sucesso.",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage:
            "Todos os dados do utilizador serão perdidos. Os atendimentos abertos deste utilizador serão movidos para a fila.",
        },
      },
      helps: {
        title: "Central de Ajuda",
      },
      about: {
        aboutthe: "Sobre o",
        copyright: "© 2024 - Funcionando com Takon Sobat",
        buttonclose: "Tutup",
        title: "Sobre o Takon Sobat",
        abouttitle: "Origem e melhorias",
        aboutdetail: "O ticketz é derivado indireto do projeto Whaticket com melhorias compartilhadas pelos desenvolvedores do sistema EquipeChat através do canal VemFazer no YouTube, posteriormente melhoradas por Claudemir Todo Bom",
        aboutauthorsite: "Site do autor",
        aboutwhaticketsite: "Site do Whaticket Community no Github",
        aboutvemfazersite: "Site do canal Vem Fazer no Github",
        licenseheading: "Licença em Código Aberto",
        licensedetail: "O ticketz está licenciado sob a GNU Affero General Public License versão 3, isso significa que qualquer utilizador que tiver acesso a esta aplicação tem o direito de obter acesso ao código fonte. Mais informAksi nos links abaixo:",
        licensefulltext: "Texto completo da licença",
        licensesourcecode: "Código fonte do Takon Sobat",
      },
      schedules: {
        title: "Agendamentos",
        confirmationModal: {
          deleteTitle: "Tem a certeza que quer excluir este Agendamento?",
          deleteMessage: "Esta ação não pode ser revertida.",
        },
        table: {
          contact: "Contacto",
          body: "Pesan",
          sendAt: "Data de Agendamento",
          sentAt: "Data de Envio",
          status: "Estado",
          actions: "Aksi",
        },
        buttons: {
          add: "Novo Agendamento",
        },
        toasts: {
          deleted: "Agendamento excluído com sucesso.",
        },
      },
      tags: {
        title: "Tags",
        confirmationModal: {
          deleteTitle: "Tem a certeza que quer excluir esta Tag?",
          deleteMessage: "Esta ação não pode ser revertida.",
        },
        table: {
          name: "Nome",
          color: "Cor",
          tickets: "Registros",
          actions: "Aksi",
          id: "Id",
          kanban: "Kanban",
        },
        buttons: {
          add: "Baru Tag",
        },
        toasts: {
          deleted: "Tag excluída com sucesso.",
        },
      },
      settings: {
        group: {
          general: "Geral",
          timeouts: "Tempos de espera",
          officeHours: "Horário de expediente",
          groups: "Grupos",
          confidenciality: "Confidencialidade",
          api: "API",
          serveradmin: "Administração do servidor",
        },
        success: "Pengaturan salvas com sucesso.",
        title: "Pengaturan",
        settings: {
          userCreation: {
            name: "Criação de utilizador",
            options: {
              enabled: "Ativado",
              disabled: "Desativado",
            },
          },
        },
        validations: {
          title: "AvaliAksi",
          options: {
            enabled: "Habilitado",
            disabled: "Desabilitado",
          },
        },
        OfficeManagement: {
          title: "Gestão de Expediente",
          options: {
            disabled: "Desabilitado",
            ManagementByDepartment: "Gestão Por Fila",
            ManagementByCompany: "Gestão Por Empresa",
          },
        },
        outOfHoursAction: {
          title: "Ação fora do expediente",
          options: {
            pending: "Deixar como pendente",
            closed: "Tutup ticket",
          },
        },
        IgnoreGroupMessages: {
          title: "Ignorar Mensagens de Grupos",
          options: {
            enabled: "Ativado",
            disabled: "Desativado",
          },
        },
        soundGroupNotifications: {
          title: "NotificAksi de som de grupo",
          options: {
            enabled: "Ativado",
            disabled: "Desativado",
          },
        },
        groupsTab: {
          title: "Aba de Grupos",
          options: {
            enabled: "Ativado",
            disabled: "Desativado",
          },
        },
        VoiceAndVideoCalls: {
          title: "Chamadas de Voz e Vídeo",
          options: {
            enabled: "Ignorar",
            disabled: "Informar indisponibilidade",
          },
        },
        AutomaticChatbotOutput: {
          title: "Saída automática de chatbot",
          options: {
            enabled: "Ativado",
            disabled: "Desativado",
          },
        },
        ShowNumericEmoticons: {
          title: "Exibir emojis numéricos na fila",
          options: {
            enabled: "Ativado",
            disabled: "Desativado",
          },
        },
        QuickMessages: {
          title: "Mensagens Cepat",
          options: {
            enabled: "Por empresa",
            disabled: "Por Utilizador",
          },
        },
        AllowRegistration: {
          title: "Permitir registo",
          options: {
            enabled: "Ativado",
            disabled: "Desativado",
          },
        },
        FileDownloadLimit: {
          title: "Limite de Download de ficheiros (MB)",
        },
        messageVisibility: {
          title: "Visibilidade da Pesan",
          options: {
            respectMessageQueue: "Respeitar fila da Pesan",
            respectTicketQueue: "Respeitar fila do ticket",
          },
        },
        keepQueueAndUser: {
          title: "Manter fila e utilizador no ticket fechado",
          options: {
            enabled: "Ativado",
            disabled: "Desativado",
          },
        },
        GracePeriod: {
          title: "Carência após vencimento (dias)",
        },
        "ticketAcceptedMessage": {
          "title": "Pesan de ticket aceito",
          "placeholder": "Digite sua Pesan de ticket aceito aqui"
        },
        "transferMessage": {
          "title": "Pesan de transferência",
          "placeholder": "Digite sua Pesan de transferência aqui"
        },
        "mustacheVariables": {
          "title": "Variáveis disponíveis:"
        },
        WelcomeGreeting: {
          greetings: "Olá",
          welcome: "Bem-vindo a",
          expirationTime: "Aktif até",
        },
        Options: {
          title: "Pilihan",
        },
        Companies: {
          title: "Empresas",
        },
        schedules: {
          title: "Horários",
        },
        Plans: {
          title: "Planos",
        },
        Help: {
          title: "Ajuda",
        },
        Whitelabel: {
          title: "Whitelabel",
        },
        PaymentGateways: {
          title: "Gateways de pagamento",
        },
      },
      messagesList: {
        header: {
          assignedTo: "Atribuído a:",
          buttons: {
            return: "Retornar",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceitar",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Digite uma Pesan",
        placeholderClosed:
          "Reabra ou aceite este ticket para Kirim uma Pesan.",
        signMessage: "Assinar",
        replying: "A responder",
        editing: "A editar",
      },
      message: {
        edited: "Editada",
      },
      contactDrawer: {
        header: "Dados do contacto",
        buttons: {
          edit: "Editar contacto",
        },
        extraInfo: "Outras informAksi",
      },
      ticketOptionsMenu: {
        schedule: "Agendamento",
        delete: "Eliminar",
        transfer: "Transferir",
        registerAppointment: "ObservAksi do Contacto",
        appointmentsModal: {
          title: "ObservAksi do Contacto",
          textarea: "Observação",
          placeholder: "Insira aqui a informação que deseja registar",
        },
        confirmationModal: {
          title: "Eliminar o ticket do contacto",
          message:
            "Atenção! Todas as mensagens relacionadas ao ticket serão perdidas.",
        },
        buttons: {
          delete: "Eliminar",
          cancel: "Batalkan",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Batalkan",
        },
      },
      messageOptionsMenu: {
        delete: "Eliminar",
        edit: "Editar",
        history: "Histórico",
        reply: "Responder",
        confirmationModal: {
          title: "Apagar Pesan?",
          message: "Esta ação não pode ser revertida.",
        },
      },
      messageHistoryModal: {
        close: "Tutup",
        title: "Histórico de edição da Pesan",
      },
      presence: {
        unavailable: "Indisponível",
        available: "Disponível",
        composing: "A digitar...",
        recording: "A gravar...",
        paused: "Em pausa",
      },
      privacyModal: {
        title: "Editar Privacidade do WhatsApp",
        buttons: {
          cancel: "Batalkan",
          okEdit: "Simpan",
        },
        form: {
          menu: {
            all: "Todos",
            none: "Ninguém",
            contacts: "Meus contactos",
            contact_blacklist: "Contactos selecionados",
            match_last_seen: "Semelhante ao Visto por Último",
            known: "Conhecidos",
            disable: "Desativada",
            hrs24: "24 Horas",
            dias7: "7 Dias",
            dias90: "90 Dias",
          },
          readreceipts: "Para atualizar a privacidade dos recibos de leitura",
          profile: "Para atualizar a privacidade da foto do perfil",
          status: "Para atualizar a privacidade dos estados",
          online: "Para atualizar a privacidade online",
          last: "Para atualizar a privacidade do Último Visto",
          groupadd: "Para atualizar a privacidade de Tambah a grupos",
          calladd: "Para atualizar a privacidade de Tambah a Chamadas",
          disappearing: "Para atualizar o Modo de Desaparecimento Padrão",
        },
      },
      backendErrors: {
        ERR_UNAUTHORIZED: "Não autorizado. Por favor, faça o login novamente.",
        ERR_FORBIDDEN: "Acesso negado. Você não tem permissão para acessar este recurso.",
        ERR_CHECK_NUMBER: "Erro ao verificar o número do WhatsApp.",
        ERR_NO_OTHER_WHATSAPP: "Deve haver pelo menos um WhatsApp padrão.",
        ERR_NO_DEF_WAPP_FOUND:
          "Nenhum WhatsApp padrão encontrado. Verifique a página de conexões.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sessão do WhatsApp não foi inicializada. Verifique a página de conexões.",
        ERR_WAPP_CHECK_CONTACT:
          "Não foi possível verificar o contacto do WhatsApp. Verifique a página de conexões",
        ERR_WAPP_INVALID_CONTACT: "Este não é um número de WhatsApp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "Não foi possível baixar mídia do WhatsApp. Verifique a página de conexões.",
        ERR_INVALID_CREDENTIALS:
          "Erro de autenticação. Por favor, tente novamente.",
        ERR_SENDING_WAPP_MSG:
          "Erro ao Kirim Pesan do WhatsApp. Verifique a página de conexões.",
        ERR_DELETE_WAPP_MSG: "Não foi possível excluir a Pesan do WhatsApp.",
        ERR_EDITING_WAPP_MSG: "Não foi possível editar a Pesan do WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Já existe um ticket aberto para este contacto.",
        ERR_SESSION_EXPIRED: "Sessão expirada. Por favor entre novamente.",
        ERR_USER_CREATION_DISABLED:
          "A criação do utilizador foi desabilitada pelo administrador.",
        ERR_NO_PERMISSION: "Você não tem permissão para acessar este recurso.",
        ERR_DUPLICATED_CONTACT: "Já existe um contacto com este número.",
        ERR_NO_SETTING_FOUND: "Nenhuma configuração encontrada com este ID.",
        ERR_NO_CONTACT_FOUND: "Nenhum contacto encontrado com este ID.",
        ERR_NO_TICKET_FOUND: "Nenhum ticket encontrado com este ID.",
        ERR_NO_USER_FOUND: "Nenhum utilizador encontrado com este ID.",
        ERR_NO_WAPP_FOUND: "Nenhum WhatsApp encontrado com este ID.",
        ERR_CREATING_MESSAGE: "Erro ao criar Pesan na base de dados.",
        ERR_CREATING_TICKET: "Erro ao criar ticket na base de dados.",
        ERR_FETCH_WAPP_MSG:
          "Erro ao buscar a Pesan no WhatsApp, talvez ela seja muito antiga.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Esta cor já está em uso, escolha outra.",
        ERR_WAPP_GREETING_REQUIRED:
          "A Pesan de saudação é obrigatória quando há mais de uma fila.",
        ERR_SUBSCRIPTION_CHECK_FAILED: "Assinatura inválida ou não encontrada",
        ERR_WAPP_NOT_FOUND: "Conexão indisponível",
        ERR_SUBSCRIPTION_EXPIRED: "Assinatura expirada",
        ERR_UNKOWN: "Erro desconhecido",
      },
      ticketz: {
        registration: {
          header: "Registe-se na base de utilizadores do Ticketz",
          description: "Preencha os campos abaixo para se registar na base de utilizadores do Ticketz e receber novidades sobre o projeto.",
          name: "Nome",
          country: "País",
          phoneNumber: "Número de WhatsApp",
          submit: "Registar",
        },
        support: {
          title: "Apoie o projeto Ticketz Open Source",
          mercadopagotitle: "Cartão de Crédito",
          recurringbrl: "Doação recorrente em R$",
          paypaltitle: "Cartão de Crédito",
          international: "Internacional em US$",
        },
      },
    },
  },
};

export { messages };
