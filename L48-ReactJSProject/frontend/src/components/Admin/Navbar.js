import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// function CreateNavbar(links) {
//     return (
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Container fluid>
//                 <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="navbarScroll" />
//                 <Navbar.Collapse id="navbarScroll">
//                     <Nav
//                         className="me-auto my-2 my-lg-0"
//                         style={{ maxHeight: '100px' }}
//                         navbarScroll
//                     >
//                         <Nav.Link href="#action1">Home</Nav.Link>
//                         <Nav.Link href="#action2">Link</Nav.Link>
//                         {/* {
//                             links.map((link, index) =>
//                                 <Nav.Link key={index} to={link.url}>{link.text}</Nav.Link>
//                             )
//                         } */}
//                         <NavDropdown title="Link" id="navbarScrollingDropdown">
//                             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action4">
//                                 Another action
//                             </NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action5">
//                                 Something else here
//                             </NavDropdown.Item>
//                         </NavDropdown>
//                         {/* <Nav.Link href="#" disabled>
//                             Link
//                         </Nav.Link> */}
//                     </Nav>
//                     <Form className="d-flex">
//                         <Form.Control
//                             type="search"
//                             placeholder="Search"
//                             className="me-2"
//                             aria-label="Search"
//                         />
//                         <Button variant="outline-success">Search</Button>
//                     </Form>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

const AdminNavbar = () => {
    return (
        <div>
            <nav className='d-flex space-around align-center admin-nav'>
                {/* {
                    CreateNavbar([
                        { url: "/admin/restaurant", text: "New Restaurant" },
                        { url: "/admin/restaurant-list", text: "Available Restaurant" },
                    ])
                } */}
                <NavLink className="admin-navlink" to="/admin/restaurant">New Restaurant</NavLink>
                <NavLink className="admin-navlink" to="/admin/restaurant-list">Available Restaurants</NavLink>
            </nav>
        </div>
    )
}

export default AdminNavbar