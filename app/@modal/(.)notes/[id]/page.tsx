import NotePreview from "@/app/@modal/(.)notes/[id]/NotePreview";

export default function NoteModal({ params }: { params: { id: string } }) {
  return <NotePreview noteId={params.id} />;
}
