import NotePreview from "@/components/NotePreview/NotePreview";

export default function NoteModal({ params }: { params: { id: string } }) {
  return <NotePreview noteId={params.id} />;
}
