const messages = {
  pt: {
    translations: {
      common: {
        search: "Buscar",
        filter: "Filtrar",
        edit: "Editar",
        delete: "Excluir",
        cancel: "Batalkan",
        save: "Simpan",
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
        user: "Usuário",
        connection: "Conexão",
        queue: "Fila",
        contact: "Contato",
        whatsappNumber: "Número do Whatsapp",
        dueDate: "Data de vencimento",
        copy: "Copiar",
        paste: "Colar",
        proceed: "Prosseguir",
        enabled: "Ativado",
        disabled: "Desativado",
        noqueue: "Sem fila",
        rating: "Avaliação",
        transferTo: "Transferir para",
      },
      signup: {
        title: "Cadastre-se",
        toasts: {
          success: "Usuário criado com sucesso! Faça seu login!!!.",
          fail: "Erro ao criar usuário. Verifique os dados informados.",
        },
        form: {
          name: "Nome",
          email: "Email",
          password: "Senha",
        },
        buttons: {
          submit: "Cadastrar",
          login: "Já tem uma conta? Entre!",
        },
      },
      login: {
        title: "Login",
        form: {
          email: "Email",
          password: "Senha",
        },
        buttons: {
          submit: "Entrar",
          register: "Não tem um conta? Cadastre-se!",
        },
      },
      companies: {
        title: "Cadastrar Empresa",
        form: {
          name: "Nome da Empresa",
          plan: "Plano",
          token: "Token",
          submit: "Cadastrar",
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
        usersOnline: "Usuários online",
        ticketsWaiting: "Atendimentos aguardando",
        ticketsOpen: "Atendimentos abertos",
        ticketsDone: "Atendimentos resolvidos",
        totalTickets: "Total de atendimentos",
        newContacts: "Novos contatos",
        avgServiceTime: "Tempo médio de atendimento",
        avgWaitTime: "Tempo médio de espera",
        ticketsOnPeriod: "Atendimentos no período",
        userCurrentStatus: "Status (Atual)",
        filter: {
          period: "Período",
          custom: "Personalizado",
          last3days: "Últimos 3 dias",
          last7days: "Últimos 7 dias",
          last14days: "Últimos 14 dias",
          last30days: "Últimos 30 dias",
          last90days: "Últimos 90 dias"
        },
        date: {
          start: "Data inicial",
          end: "Data final",
        },
        ticketCountersLabels: {
          created: "Criado",
          closed: "Fechado",
        },
      },
      connections: {
        title: "Conexões",
        toasts: {
          deleted: "Conexão com o WhatsApp excluída com sucesso!",
        },
        confirmationModal: {
          deleteTitle: "Deletar",
          deleteMessage: "Você tem certeza? Essa ação não pode ser revertida.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "Tem certeza? Você precisará ler o QR Code novamente.",
        },
        buttons: {
          add: "Tambah WhatsApp",
          disconnect: "desconectar",
          tryAgain: "Tentar novamente",
          qrcode: "QR CODE",
          newQr: "Novo QR CODE",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "Falha ao iniciar sessão do WhatsApp",
            content:
              "Certifique-se de que seu celular esteja conectado à internet e tente novamente, ou solicite um novo QR Code",
          },
          qrcode: {
            title: "Esperando leitura do QR Code",
            content:
              "Clique no botão 'QR CODE' e leia o QR Code com o seu celular para iniciar a sessão",
          },
          connected: {
            title: "Conexão estabelecida!",
          },
          timeout: {
            title: "A conexão com o celular foi perdida",
            content:
              "Certifique-se de que seu celular esteja conectado à internet e o WhatsApp esteja aberto, ou clique no botão 'Desconectar' para obter um novo QR Code",
          },
          refresh: "Refazer conexão",
          disconnect: "Desconectar",
          scan: "Ler QR Code",
          newQr: "Gerar novo QR Code",
          retry: "Tentar novamente",
        },
        table: {
          name: "Nome",
          status: "Status",
          lastUpdate: "Última atualização",
          default: "Padrão",
          actions: "Aksi",
          session: "Sessão",
        },
      },
      internalChat: {
        title: "Chat Interno"

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
        title: "Contatos",
        toasts: {
          deleted: "Contato excluído com sucesso!",
        },
        searchPlaceholder: "Pesquisar...",
        confirmationModal: {
          deleteTitle: "Deletar ",
          importTitlte: "Importar contatos",
          deleteMessage:
            "Tem certeza que deseja deletar este contato? Todos os atendimentos relacionados serão perdidos.",
          importMessage: "Deseja importar todos os contatos do telefone?",
        },
        buttons: {
          import: "Importar Contatos",
          add: "Tambah Contato",
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
          add: "Tambah contato",
          edit: "Editar contato",
        },
        form: {
          mainInfo: "Dados do contato",
          extraInfo: "InformAksi adicionais",
          name: "Nome",
          number: "Número do Whatsapp",
          email: "Email",
          extraName: "Nome do campo",
          extraValue: "Valor",
          disableBot: "Desabilitar chatbot",
        },
        buttons: {
          addExtraInfo: "Tambah informação",
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batalkan",
        },
        success: "Contato salvo com sucesso.",
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
          outOfHoursMessage: "Pesan de fora de expediente",
          ratingMessage: "Pesan de avaliação",
          transferMessage: "Pesan de Transferência",
          token: "Token",
        },
        buttons: {
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batalkan",
          attach: "Anexar Arquivo",
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
        }
      },
      userModal: {
        title: {
          add: "Tambah usuário",
          edit: "Editar usuário",
        },
        form: {
          name: "Nome",
          email: "Email",
          password: "Senha",
          profile: "Perfil",
        },
        buttons: {
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batalkan",
        },
        success: "Usuário salvo com sucesso.",
      },
      scheduleModal: {
        title: {
          add: "Novo Agendamento",
          edit: "Editar Agendamento",
        },
        form: {
          body: "Pesan",
          contact: "Contato",
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
        success: "Tag salvo com sucesso.",
        successKanban: "Lane salva com sucesso.",

      },
      chat: {
        noTicketMessage: "Selecione um ticket para começar a conversar.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "ARRASTE E SOLTE ARQUIVOS NO CAMPO ABAIXO",
          titleFileList: "Lista de arquivo(s)"
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
          deleted: "O atendimento que você estava foi deletado.",
        },
        notification: {
          message: "Pesan de",
        },
        tabs: {
          open: { title: "Abertas" },
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
        fieldLabel: "Digite para buscar usuários",
        fieldQueueLabel: "Transferir para fila",
        fieldQueuePlaceholder: "Selecione uma fila",
        noOptions: "Nenhum usuário encontrado com esse nome",
        buttons: {
          ok: "Transferir",
          cancel: "Batalkan",
        },
      },
      ticketsList: {
        pendingHeader: "Aguardando",
        assignedHeader: "Atendendo",
        noTicketsTitle: "Nada aqui!",
        noTicketsMessage:
          "Nenhum atendimento encontrado com esse status ou termo pesquisado",
        buttons: {
          accept: "Aceitar",
        },
      },
      newTicketModal: {
        title: "Criar Ticket",
        fieldLabel: "Digite para pesquisar o contato",
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
          contacts: "Contatos",
          queues: "Filas & Chatbot",
          tags: "Tags",
          administration: "Administração",
          service: "Atendimento",
          users: "Usuários",
          settings: "Pengaturan",
          helps: "Ajuda",
          messagesAPI: "API",
          schedules: "Agendamentos",
          campaigns: "Campanhas",
          annoucements: "InformAktifs",
          chats: "Chat Interno",
          financeiro: "Financeiro",
          logout: "Sair",
          management: "Gerência",
          kanban: "Kanban"
        },
        appBar: {
          i18n: {
            language: "Português 🇧🇷",
            language_short: "pt_BR"
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
          token: "Token cadastrado",
        },
        mediaMessage: {
          number: "Número",
          body: "Nome do arquivo",
          media: "Arquivo",
          token: "Token cadastrado",
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
          tags: "Lanes"
        }
      },
      tagsKanban: {
        title: "Lanes",
        laneDefault: "Em aberto",
        confirmationModal: {
          deleteTitle: "Você tem certeza que quer excluir esta Lane?",
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
        title: "Listas de Contatos",
        table: {
          name: "Nome",
          contacts: "Contatos",
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
        title: "Contatos",
        searchPlaceholder: "Pesquisa",
        buttons: {
          add: "Novo",
          lists: "Listas",
          import: "Importar",
        },
        dialog: {
          name: "Nome",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          okEdit: "Editar",
          okAdd: "Tambah",
          add: "Tambah",
          edit: "Editar",
          cancel: "Batalkan",
        },
        table: {
          name: "Nome",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          actions: "Aksi",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta ação não pode ser revertida.",
          importMessage: "Deseja importar os contatos desta planilha? ",
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
          contactLists: "Listas de Contatos",
        },
        table: {
          name: "Nome",
          whatsapp: "Conexão",
          contactList: "Lista de Contatos",
          status: "Status",
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
            status: "Status",
            scheduledAt: "Agendamento",
            confirmation: "Confirmação",
            contactList: "Lista de Contato",
          },
          buttons: {
            add: "Tambah",
            edit: "Atualizar",
            okadd: "Ok",
            cancel: "Batalkan Disparos",
            restart: "Reiniciar Disparos",
            close: "Tutup",
            attach: "Anexar Arquivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Excluir",
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
          title: "Title",
          text: "Texto",
          mediaName: "Arquivo",
          status: "Status",
          actions: "Aksi",
        },
        dialog: {
          edit: "Edição de InformAktif",
          add: "Novo InformAktif",
          update: "Editar InformAktif",
          readonly: "Apenas Visualização",
          form: {
            priority: "Prioridade",
            title: "Title",
            text: "Texto",
            mediaPath: "Arquivo",
            status: "Status",
          },
          buttons: {
            add: "Tambah",
            edit: "Atualizar",
            okadd: "Ok",
            cancel: "Batalkan",
            close: "Tutup",
            attach: "Anexar Arquivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Excluir",
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
          deleteTitle: "Excluir",
          deleteMessage:
            "Você tem certeza? Essa ação não pode ser revertida! Os atendimentos dessa fila continuarão existindo, mas não terão mais nenhuma fila atribuída.",
        },
      },
      queueSelect: {
        inputLabel: "Filas",
      },
      users: {
        title: "Usuários",
        table: {
          name: "Nome",
          email: "Email",
          profile: "Perfil",
          actions: "Aksi",
        },
        buttons: {
          add: "Tambah usuário",
        },
        toasts: {
          deleted: "Usuário excluído com sucesso.",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "Todos os dados do usuário serão perdidos. Os atendimento abertos deste usuário serão movidos para a fila.",
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
        aboutdetail: "O ticketz é derivado indireto do projeto Whaticket com melhorias compartilhadas pelos desenvolvedores do sistema EquipeChat através do canal VemFazer no youtube, posteriormente melhoradas por Claudemir Todo Bom",
        aboutauthorsite: "Site do autor",
        aboutwhaticketsite: "Site do Whaticket Community no Github",
        aboutvemfazersite: "Site do canal Vem Fazer no Github",
        licenseheading: "Licença em Código Aberto",
        licensedetail: "O ticketz está licenciado sob a GNU Affero General Public License versão 3, isso significa que qualquer usuário que tiver acesso a esta aplicação tem o direito de obter acesso ao código fonte. Mais informAksi nos links abaixo:",
        licensefulltext: "Texto completo da licença",
        licensesourcecode: "Código fonte do Takon Sobat"
      },
      schedules: {
        title: "Agendamentos",
        confirmationModal: {
          deleteTitle: "Você tem certeza que quer excluir este Agendamento?",
          deleteMessage: "Esta ação não pode ser revertida.",
        },
        table: {
          contact: "Contato",
          body: "Pesan",
          sendAt: "Data de Agendamento",
          sentAt: "Data de Envio",
          status: "Status",
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
          deleteTitle: "Você tem certeza que quer excluir esta Tag?",
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
          deleted: "Tag excluído com sucesso.",
        },
      },
      whitelabel: {
        primaryColorLight: "Cor primária clara",
        primaryColorDark: "Cor primária escura",
        lightLogo: "Logo do app claro",
        darkLogo: "Logo do app escuro",
        favicon: "Favicon do app",
        appname: "Nome do app",
        logoHint: "Prefira SVG e aspecto de 28:10",
        faviconHint: "Prefira imagem SVG quadrada ou PNG 512x512",
      },
      settings: {
        group: {
          general: "Geral",
          timeouts: "Tempos de espera",
          officeHours: "Horário de expediente",
          groups: "Grupos",
          confidenciality: "Confidencialidade",
          api: "API",
          externalServices: "Serviços externos",
          serveradmin: "Administração do servidor",
        },
        success: "Pengaturan salvas com sucesso.",
        copiedToClipboard: "Copiado para a área de transferência",
        title: "Pengaturan",
        chatbotTicketTimeout: "Timeout do chatbot (minutos)",
        chatbotTicketTimeoutAction: "Ação do timeout do chatbot",
        settings: {
          userCreation: {
            name: "Criação de usuário",
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
          title: "Gerenciamento de Expediente",
          options: {
            disabled: "Desabilitado",
            ManagementByDepartment: "Gerenciamento Por Fila",
            ManagementByCompany: "Gerenciamento Por Empresa",
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
            disabled: "informar indisponibilidade",
          },
        },
        AutomaticChatbotOutput: {
          title: "Saída automática de chatbot",
          options: {
            enabled: "Activado",
            disabled: "Desativado",
          },
        },
        ShowNumericEmoticons: {
          title: "Exibir emojis numéricos na fila",
          options: {
            enabled: "Activado",
            disabled: "Desativado",
          },
        },
        QuickMessages: {
          title: "Mensagens Cepat",
          options: {
            enabled: "Por empresa",
            disabled: "Por Usuário",
          },
        },
        AllowRegistration: {
          title: "Permitir cadastro",
          options: {
            enabled: "Ativado",
            disabled: "Desativado",
          },
        },
        FileUploadLimit: {
          title: "Limite de Upload de arquivos (MB)",
        },
        FileDownloadLimit: {
          title: "Limite de Download de arquivos (MB)",
        },
        "messageVisibility": {
          "title": "Visibilidade da Pesan",
          "options": {
            "respectMessageQueue": "Respeitar fila da Pesan",
            "respectTicketQueue": "Respeitar fila do ticket"
          }
        },
        "keepQueueAndUser": {
          "title": "Manter fila e usuário no ticket fechado",
          "options": {
            "enabled": "Ativado",
            "disabled": "Desativado"
          }
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
          welcome: "Seja bem-vindo a",
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
          title: "Payment gateways",
        },
        AIProvider: {
          title: "Serviço de IA",
        },
        AudioTranscriptions: {
          title: "Transcrição de áudio",
        },        
        TagsMode: {
          title: "Modo de Tags",
          options: {
            ticket: "Ticket",
            contact: "Contato",
            both: "Ticket e Contacto"
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Atribuído à:",
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
          "Reabra ou aceite esse ticket para Kirim uma Pesan.",
        signMessage: "Assinar",
        replying: "Respondendo",
        editing: "Editando",
      },
      message: {
        edited: "Editada",
        forwarded: "Encaminhada",
      },

      contactDrawer: {
        header: "Dados do contato",
        buttons: {
          edit: "Editar contato",
        },
        extraInfo: "Outras informAksi",
      },
      ticketOptionsMenu: {
        schedule: "Agendamento",
        delete: "Deletar",
        transfer: "Transferir",
        registerAppointment: "ObservAksi do Contato",
        appointmentsModal: {
          title: "ObservAksi do Contato",
          textarea: "Observação",
          placeholder: "Insira aqui a informação que deseja registrar",
        },
        confirmationModal: {
          title: "Deletar o ticket do contato",
          message:
            "Atenção! Todas as mensagens relacionadas ao ticket serão perdidas.",
        },
        buttons: {
          delete: "Excluir",
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
        delete: "Deletar",
        edit: "Editar",
        forward: "Encaminhar",
        history: "Histórico",
        reply: "Responder",
        confirmationModal: {
          title: "Apagar Pesan?",
          message: "Esta ação não pode ser revertida.",
        },
      },
      messageHistoryModal: {
        close: "Tutup",
        title: "Histórico de edição da Pesan"
      },
      presence: {
        unavailable: "Indisponível",
        available: "Disponível",
        composing: "Digitando...",
        recording: "Gravando...",
        paused: "Pausado",
      },
      privacyModal: {
        title: "Editar Privacidade do Whatsapp",
        buttons: {
          cancel: "Batalkan",
          okEdit: "Simpan",
        },
        form: {
          menu: {
            all: "Todos",
            none: "Ninguém",
            contacts: "Meus contatos",
            contact_blacklist: "Contatos selecionados",
            match_last_seen: "Semelhante ao Visto por Último",
            known: "Conhecidos",
            disable: "Desativada",
            hrs24: "24 Horas",
            dias7: "7 Dias",
            dias90: "90 Dias",
          },
          readreceipts: "Para atualizar a privacidade dos recibos de leitura",
          profile: "Para atualizar a privacidade da foto do perfil",
          status: "Para atualizar a privacidade do recados",
          online: "Para atualizar a privacidade online",
          last: "Para atualizar a privacidade do Último Visto",
          groupadd: "Para atualizar a privacidade de Tambah a grupos",
          calladd: "Para atualizar a privacidade de Tambah a LigAksi",
          disappearing: "Para atualizar o Modo de Desaparecimento Padrão",
        },
      },
      backendErrors: {
        ERR_UNAUTHORIZED: "Você não está autorizado a acessar este recurso.",
        ERR_FORBIDDEN: "Você não tem permissão para acessar este recurso.",
        ERR_CHECK_NUMBER: "Verifique o número e tente novamente.",
        ERR_NO_OTHER_WHATSAPP: "Deve haver pelo menos um WhatsApp padrão.",
        ERR_NO_DEF_WAPP_FOUND:
          "Nenhum WhatsApp padrão encontrado. Verifique a página de conexões.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sessão do WhatsApp não foi inicializada. Verifique a página de conexões.",
        ERR_WAPP_CHECK_CONTACT:
          "Não foi possível verificar o contato do WhatsApp. Verifique a página de conexões",
        ERR_WAPP_INVALID_CONTACT: "Este não é um número de Whatsapp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "Não foi possível baixar mídia do WhatsApp. Verifique a página de conexões.",
        ERR_INVALID_CREDENTIALS:
          "Erro de autenticação. Por favor, tente novamente.",
        ERR_SENDING_WAPP_MSG:
          "Erro ao Kirim Pesan do WhatsApp. Verifique a página de conexões.",
        ERR_DELETE_WAPP_MSG: "Não foi possível excluir a Pesan do WhatsApp.",
        ERR_EDITING_WAPP_MSG: "Não foi possível editar a Pesan do WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Já existe um tíquete aberto para este contato.",
        ERR_SESSION_EXPIRED: "Sessão expirada. Por favor entre.",
        ERR_USER_CREATION_DISABLED:
          "A criação do usuário foi desabilitada pelo administrador.",
        ERR_NO_PERMISSION: "Você não tem permissão para acessar este recurso.",
        ERR_DUPLICATED_CONTACT: "Já existe um contato com este número.",
        ERR_NO_SETTING_FOUND: "Nenhuma configuração encontrada com este ID.",
        ERR_NO_CONTACT_FOUND: "Nenhum contato encontrado com este ID.",
        ERR_NO_TICKET_FOUND: "Nenhum tíquete encontrado com este ID.",
        ERR_NO_USER_FOUND: "Nenhum usuário encontrado com este ID.",
        ERR_NO_WAPP_FOUND: "Nenhum WhatsApp encontrado com este ID.",
        ERR_CREATING_MESSAGE: "Erro ao criar Pesan no banco de dados.",
        ERR_CREATING_TICKET: "Erro ao criar tíquete no banco de dados.",
        ERR_FETCH_WAPP_MSG:
          "Erro ao buscar a Pesan no WhtasApp, talvez ela seja muito antiga.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Esta cor já está em uso, escolha outra.",
        ERR_WAPP_GREETING_REQUIRED:
          "A Pesan de saudação é obrigatório quando há mais de uma fila.",
        ERR_SUBSCRIPTION_CHECK_FAILED: "Assinatura inválida ou não encontrada",
        ERR_WAPP_NOT_FOUND: "Conexão indisponível",
        ERR_SUBSCRIPTION_EXPIRED: "Assinatura expirada",
        ERR_UNKOWN: "Erro desconhecido",
      },
      ticketz: {
        registration: {
          header: "Cadastre-se na base de usuários do Ticketz",
          description: "Preencha os campos abaixo para se cadastrar na base de usuários do Ticketz e receber novidades sobre o projeto.",
          name: "Nome",
          country: "País",
          phoneNumber: "Número de Whatsapp",
          submit: "Cadastrar",
        },
        support: {
          title: "Apoie o projeto Ticketz Open Source",
          mercadopagotitle: "Cartão de Crédito",
          recurringbrl: "Doação recorrente em R$",
          paypaltitle: "Cartão de Crédito",
          international: "Internacional em US$",
        }
      },
    },
  },
};

export { messages };
