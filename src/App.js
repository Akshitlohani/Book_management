import React, { useState } from 'react';
import './BookForm.css'; // import the CSS file

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [records, setRecords] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newRecord = { title, author, isbn };
    setRecords([...records, newRecord]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  }

  function handleDelete(index) {
    const newRecords = [...records];
    newRecords.splice(index, 1);
    setRecords(newRecords);
  }

  function handleRemoveAll() {
    setRecords([]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={event => setTitle(event.target.value)} className="form-input" />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={event => setAuthor(event.target.value)} className="form-input" />
        </label>
        <label>
          ISBN:
          <input type="text" value={isbn} onChange={event => setIsbn(event.target.value)} className="form-input" />
        </label>
        <button type="submit" className="form-button">Add Book</button>
      </form>
      <div>
        <h2>Records</h2>
        {records.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{record.title}</td>
                  <td>{record.author}</td>
                  <td>{record.isbn}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No records found.</p>
        )}
        <button onClick={handleRemoveAll} className="form-button">Remove All</button>
      </div>
    </div>
  );
}

export default BookForm;
