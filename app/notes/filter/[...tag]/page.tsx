import NotesClient from "../../Notes.client";

interface Props {
  params: { tag?: string[] };
}

export default function FilteredNotesPage({ params }: Props) {
  const tag = params.tag ? params.tag[0] : undefined;

  return <NotesClient tag={tag === "all" ? undefined : tag} />;
}
