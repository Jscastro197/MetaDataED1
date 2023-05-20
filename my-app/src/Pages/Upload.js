import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Upload.css'

const Upload = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your desired action with the selected files
    console.log('Selected Files:', selectedFiles);

    // Reset the selected files
    setSelectedFiles([]);
  };

  return (
    <div>
        <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label className="text-center text-white mx-auto d-block">Upload File</Form.Label>
          <Form.Control
            type="file"
            name="fileupload"
            multiple
            accept=".txt, .ppt, .pdf"
            onChange={handleFileChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </div>
  )
}

export default Upload
