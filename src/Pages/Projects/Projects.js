import React from 'react';
import './Projects.css';
import project from '../../../src/Assets/profile-pic/profile-pic (46).png';
import { Button, Card, CardGroup, Modal } from 'react-bootstrap';

const Projects = () => {
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <section id='projects' className='my-5 px-5'>
            <h1 className='text-center my-5'>Projects</h1>
            <article>
                <CardGroup className='gap-4'>
                    <Card className='border border-primary container'>
                        <img variant="top" src={project} className='w-50 mx-auto image' alt='img' />
                        <div className='middle'>
                            <p className='text'>Go Live</p>
                        </div>
                    </Card>
                    <Card className='border border-primary container'>
                        <img variant="top" src={project} className='w-50 mx-auto image' alt='img' />
                        <div className='middle'>
                            <p className='text'>Go Live</p>
                        </div>
                    </Card>
                    <Card className='border border-primary container'>
                        <img variant="top" src={project} className='w-50 mx-auto image' alt='img' />
                        <div className='middle'>
                            <p className='text'>Go Live</p>
                        </div>
                    </Card>
                </CardGroup>
            </article>
            <article className='mt-4'>
                <CardGroup className='gap-4'>
                    <Card className='border border-primary container'>
                        <img variant="top" src={project} className='w-50 mx-auto image' alt='img' />
                        <div className='middle'>
                            <p className='text'>Go Live</p>
                        </div>
                    </Card>
                    <Card className='border border-primary container'>
                        <img variant="top" src={project} className='w-50 mx-auto image' alt='img' />
                        <div className='middle'>
                            <p className='text'>Go Live</p>
                        </div>
                    </Card>
                    <Card className='border border-primary container'>
                        <img variant="top" src={project} className='w-50 mx-auto image' alt='img' />
                        <div className='middle'>

                            <Button className='text' variant="primary" onClick={() => setModalShow(true)}>
                                Go Live
                            </Button>
                        </div>
                    </Card>
                </CardGroup>
            </article>


            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </section>
    );
};

export default Projects;