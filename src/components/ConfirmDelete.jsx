function ConfirmDelete({ resourceName, onConfirm, onCloseModal }) {
  return (
    <div>
      <h3>Delete {resourceName}</h3>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="button-cont">
        <button onClick={onCloseModal}>Cancel</button>{" "}
        <button onClick={onConfirm}>Delete</button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
