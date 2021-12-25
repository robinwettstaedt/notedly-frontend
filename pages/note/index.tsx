import NewTextEditorLight from '../../components/TextEditor/NewTextEditorLight';
import NewTextEditorDark from '../../components/TextEditor/NewTextEditorDark';
import usePrivateRoute from '../../lib/hooks/usePrivateRoute';

const Note = () => {
  usePrivateRoute();

  return (
    <div>
      <NewTextEditorDark />
      {/* <NewTextEditorLight /> */}
    </div>
  );
};

export default Note;
