import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveCertification } from "../redux/certificationSlice";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { AiOutlineUpload } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import "../styles/style.css";

const CertificationForm = () => {
  const [certifications, setCertifications] = useState([]);
  const [name, setName] = useState("");
  const [issuer, setIssuer] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Validation function
  const validate = () => {
    let errors = {};
    if (!name) errors.name = "Certification name is required";
    if (!issuer) errors.issuer = "Issuer is required";
    if (!file) errors.file = "File is required";
    if (!["application/pdf", "image/jpeg"].includes(file.type)) {
      errors.file = "Only PDF and JPG files are allowed";
    }
    if (certifications.length >= 5) {
      errors.certifications = "You can only add up to 5 certifications.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // Handle adding certification
  const handleAddCertification = (e) => {
    e.preventDefault();
    if (validate()) {
      const newCertification = {
        name,
        issuer,
        fileUrl: URL.createObjectURL(file),
        fileName: file.name,
      };
      setCertifications([...certifications, newCertification]);
      setName("");
      setIssuer("");
      setFile(null);
      setErrors({});
    }
  };

  // Remove a certification
  const handleRemoveCertification = (index) => {
    setCertifications(certifications.filter((_, i) => i !== index));
  };

  // Save all certifications to Redux
  const handleSave = () => {
    let newErrors = {}; // Store individual field errors

    // Check if certifications exist
    if (certifications.length === 0) {
      newErrors.general =
        "Please add at least one certification before saving.";
    } else {
      certifications.forEach((cert, index) => {
        if (!cert.name)
          newErrors[`name_${index}`] = "Certification name is required";
        if (!cert.issuer) newErrors[`issuer_${index}`] = "Issuer is required";
        if (!cert.fileUrl) newErrors[`file_${index}`] = "File is required";
      });
    }

    // If any errors exist, set them and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save certifications if all validations pass
    certifications.forEach((cert) => {
      dispatch(saveCertification(cert));
    });

    navigate("/certification-view");
  };

  return (
    <Container className="certification-container">
      <h2 className="certification-title">Skills-Based Certifications</h2>
      <p className="certification-subtitle">
        (You can add up to 5 certifications)
      </p>
      <div className="certification-box">
        <RxCross2 className="close-icon" />
        <div className="inside-container">
          <Form onSubmit={handleAddCertification}>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <h5>Certification Name</h5>
                  <Form.Control
                    type="text"
                    placeholder="Enter certification name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <div className="text-danger">{errors.name}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <h5>Issuer</h5>
                  <Form.Control
                    type="text"
                    placeholder="Enter issuer"
                    value={issuer}
                    onChange={(e) => setIssuer(e.target.value)}
                  />
                  {errors.issuer && (
                    <div className="text-danger">{errors.issuer}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="file-upload">
              <label className="upload-box">
                <input
                  type="file"
                  onChange={handleFileChange}
                  hidden
                  accept=".pdf, .jpg, .jpeg"
                  disabled={certifications.length >= 5}
                />
                <span>Upload file (PDF, JPG)</span>
                <Button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#6f42c1", borderColor: "#6f42c1" }}
                  disabled={certifications.length >= 5}
                >
                  Upload <AiOutlineUpload />
                </Button>
              </label>
              {errors.file && <div className="text-danger">{errors.file}</div>}
              <p> (File format should be only pdf and jpg)</p>
            </Form.Group>
            {file && (
              <p className="selected-file">
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </p>
            )}
            <div className="button-group">
              <Button
                className="btn btn-primary"
                style={{ backgroundColor: "#6f42c1", borderColor: "#6f42c1" }}
                type="submit"
                disabled={certifications.length >= 5}
              >
                Add Certification
              </Button>
              <Button
                className="btn btn-primary"
                style={{ backgroundColor: "#6f42c1", borderColor: "#6f42c1" }}
                onClick={handleSave}
              >
                Save Certifications
              </Button>
            </div>
            {errors.general && (
              <div className="text-danger mt-2">{errors.general}</div>
            )}
          </Form>
        </div>
        {certifications.length > 0 && (
          <div className="certification-list">
            <h4>Added Certifications:</h4>
            <ul>
              {certifications.map((cert, index) => (
                <li key={index} className="certification-item">
                  <span>
                    <strong>{cert.name}</strong> - {cert.issuer}
                  </span>
                  <div>
                    <a
                      href={cert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                    <RxCross2
                      onClick={() => handleRemoveCertification(index)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};

export default CertificationForm;
