export default function Page() {
  const createSpending = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const amount = formData.get("amount");
    const description = formData.get("description");
  };

  return (
    <div>
      <form action={createSpending}>
        <div>
          <label htmlFor="title">Titre</label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="amount">Montant</label>
          <input type="number" id="amount" name="amount" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" />
        </div>
        <button type="submit">Ajouter une dépense</button>
      </form>
    </div>
  );
}
