import { useRouter } from 'next/router';
import TextEditorDark from '../../components/TextEditor/TextEditorDark';
import usePrivateRoute from '../../lib/hooks/usePrivateRoute';

const Note = () => {
  usePrivateRoute();

  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <TextEditorDark noteID={pid} />
    </div>
  );
};

export default Note;
