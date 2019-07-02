import React, { PropTypes } from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorList = ({authors, deleteAuthor}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Author ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {authors.map(author =>
          <AuthorListRow
            key={author.id}
            deleteAuthor={deleteAuthor}
            author={author}
          />
        )}
      </tbody>
    </table>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
  deleteAuthor: PropTypes.func.isRequired
};

export default AuthorList;
