
import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import Layout from './components/Layout';
import AppRoutes from './routes';

const useStyles = makeStyles({
  root: {
    ...shorthands.margin(0),
    ...shorthands.padding(0),
    minHeight: '100vh',
    backgroundColor: tokens.colorNeutralBackground1,
  },
});

function App() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
}

export default App;
