import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const AuthorListRow = ({author, deleteAuthor}) => {
  return (
    <tr>
      <td><Link to={'/author/' + author.id}>{author.id}</Link></td>
      <td>{author.firstName}</td>
      <td>{author.lastName}</td>
      <td><button onClick={() => deleteAuthor(author.id, author.firstName)} className="btn btn-danger">Delete</button></td>
    </tr>
  );
};

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired,
  deleteAuthor: PropTypes.func.isRequired
};

export default AuthorListRow;
