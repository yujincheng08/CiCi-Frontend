const drawerWidth = 240;
export default theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  title: {
    flex: 1,
    marginLeft: 36,
  },
  headerButtons: {
    display: 'flex',
    flexWrap: 'warp',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    height: '100vh',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: -12,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px', ...theme.mixins.toolbar,
  },
  account: {
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  accountForm: {
    width: '500px',
  },
  accountFormItem: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: 500,
  },
  checked: {
    ['&:hover']: {
      backgroundColor: theme.palette.action.hover,
    },
    backgroundColor: theme.palette.action.hover,
  },
  searchBar: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary[500],
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    marginRight: 2 * theme.spacing.unit,
  },
  wordTitleWord: {
    marginBottom: theme.spacing.unit,
    fontSize: 40,
  },
  mainPaper: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  wordCard: {
    overflowY: 'auto',
    height: '100vh',
    ['&::-webkit-scrollbar']: {
      height: 12,
      width: 12,
      overflow: 'visible',
    },
    ['&::-webkit-scrollbar-button']: {
      height: 0,
      width: 0,
    },

    ['&::-webkit-scrollbar-track']: {
      backgroundClip: 'padding-box',
      border: 'solid transparent',
      borderWidth: 3,
      borderRadius: 100,
      backgroundColor: theme.palette.grey[200],
    },

    ['&::-webkit-scrollbar-thumb']: {
      borderRadius: 100,
      backgroundClip: 'padding-box',
      border: 'solid transparent',
      borderWidth: 3,
      backgroundColor: theme.palette.grey[400],
    },

    ['&::-webkit-scrollbar-corner']: {
      background: 'rgba(255, 0, 0, 0)',
    },
  },
  learningState: {
    marginLeft: 5 * theme.spacing.unit,
  }
})
;
