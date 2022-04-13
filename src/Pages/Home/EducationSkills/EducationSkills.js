import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const EducationSkills = () => {
    return (
        <section>
            <article>
                <div className="card border-primary mb-3" style={{ 'max-width': '18rem' }}>
                    <div className="card border-dark mb-3" style={{ 'max-width': '18rem' }}>
                        <div className="card-header">Header</div>
                        <div className="card-body text-dark">
                            <h5 className="card-title">Dark card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <ProgressBar striped variant="success" now={40} />
                    <ProgressBar striped variant="info" now={20} />
                    <ProgressBar striped variant="warning" now={60} />
                    <ProgressBar striped variant="danger" now={80} />
                </div>
            </article>
        </section>
    );
};

export default EducationSkills;