import { getSignups } from "@/actions/signup/getSignups";

export default async function EmailsPage() {
  const emails = await getSignups();
  return (
    <div>
      {emails.map(({ name, email, id }) => (
        <div className="flex gap-2" key={id}>
          <span className="font-medium">{name}</span>
          <span className="text-muted-foreground">{email}</span>
        </div>
      ))}
    </div>
  );
}
