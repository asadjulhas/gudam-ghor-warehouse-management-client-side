import React from 'react';
import PageTitle from '../../../Hooks/PageTitle';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='blogs_page'>
      <PageTitle title='Blogs'/>
     <div className="container">
       <div className="row">
         <div className="col-md-8 offset-md-2">

         <article className='single_Blog'>
       <h2>1. Difference between javascript and node js</h2>
       <div className="table-responsive">
       <table className="table table-success table-striped">
  <thead>
    <tr className='text-center table_content'>
      <th scope="col">#</th>
      <th scope="col">JavaScript</th>
      <th scope="col">NodeJS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className='table_content'>1</th>
      <td className='table_content'>It is a programming language. We use JS mainly to write scripts on a website that makes web pages more dynamic in nature.</td>
      <td className='table_content'>It is a runtime environment for Javascript that lets a user run this programming language on the server-side as well.</td>
    </tr>

    <tr>
      <th scope="row" className='table_content'>2</th>
      <td className='table_content'>We can only run JS on browsers.</td>
      <td className='table_content'>NodeJS helps us run JS outside the browser as well.</td>
    </tr>

    <tr>
      <th scope="row" className='table_content'>3</th>
      <td className='table_content'>It is utilised on the web page’s client-side.</td>
      <td className='table_content'>lets us use JS on the server-side as well since it works on the server-side.</td>
    </tr>

    <tr>
      <th scope="row" className='table_content'>4</th>
      <td className='table_content'>The JS can easily add HTML and even play with the DOM.</td>
      <td className='table_content'>The Node.JS, on the other hand, isn’t capable enough to add various HTML tags.</td>
    </tr>

  </tbody>
</table>
       </div>
      </article>

         <article className='single_Blog'>
       <h2>2. Differences between sql and nosql databases.</h2>
       <div className="table-responsive">
       <table className="table table-success table-striped">
  <thead>
    <tr className='text-center table_content'>
      <th scope="col">#</th>
      <th scope="col">Sql</th>
      <th scope="col">Nosql</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className='table_content'>1</th>
      <td className='table_content'>SQL databases are a type of system software that supports management, analysis, capturing and querying the structured data in a relational format.</td>
      <td className='table_content'>NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes.</td>
    </tr>

    <tr>
      <th scope="row" className='table_content'>2</th>
      <td className='table_content'>A language used to communicate with databases for storage, deletion, updation, insertion and retrieval of data.</td>
      <td className='table_content'>A software to retrieve, store and manage scalability of databases.</td>
    </tr>

    <tr>
      <th scope="row" className='table_content'>3</th>
      <td className='table_content'>SQL supports predefined schemas, making the storage of data restrictive to structured type only.</td>
      <td className='table_content'>Nosql supports dynamic schemas to store different forms of data.</td>
    </tr>

    <tr>
      <th scope="row" className='table_content'>4</th>
      <td className='table_content'>SQL supports databases like MySQL, SQL Server, Oracle, etc.</td>
      <td className='table_content'>Nosql databases are Hbase, MongoDB, Redis, etc.</td>
    </tr>

  </tbody>
</table>
       </div>
      </article>

         <article className='single_Blog'>
       <h2>3. What is the purpose of jwt and how does it work</h2>
       <p>
       JWT is Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
       </p>
       <p>
       <b>How it works?</b><br/>

Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. <br /><br />

    1. User sign-in using username and password or google/facebook. <br/>
    2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br/>
    3. User’s Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br/>
    4. Resource server then verifies the authenticity of the token using the secret salt/ public key.

       </p>
      </article>
         </div>
       </div>
     </div>
    </div>
  );
};

export default Blogs;