// @ts-nocheck
import { useRouter } from 'next/router';
import { withAuth } from '../../components/Auth/withAuth';
import TextEditorDark from '../../components/TextEditor/TextEditorDark';
import useNote from '../../lib/hooks/swr/useNote';

const Note = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { note, mutateNote, isError, isLoading } = useNote(pid);

  if (isError) return <p>There was an error!</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <div>
      <TextEditorDark note={note} />
    </div>
  );
};

export default withAuth(Note);
