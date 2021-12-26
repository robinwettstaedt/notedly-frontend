import NewTextEditorLight from '../../components/TextEditor/TextEditorLight';
import NewTextEditorDark from '../../components/TextEditor/TextEditorDark';
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
