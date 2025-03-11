import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import "../styles/style.css";

const CertificationView = () => {
  const certifications = useSelector((state) => state.certification || []);

  // Ensure only the last 5 certifications are displayed
  const displayedCertifications = certifications.slice(-5);

  return (
    <Container className="certification-view">
      <h2 className="certification-title">Skills-Based Certifications</h2>
      <p className="certification-subtitle">
        (You can add up to 5 certifications)
      </p>

      {displayedCertifications.length > 0 ? (
        <div className="certification-list">
          {displayedCertifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <div className="certification-number">{index + 1}</div>

              <div className="certification-details">
                <div className="certification-header">
                  <strong className="certification-name">{cert.name}</strong>
                  <span className="certification-issuer">{cert.issuer}</span>
                </div>
                {cert.fileUrl && (
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-link"
                  >
                    View certification
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-certifications">No certifications added yet.</p>
      )}
    </Container>
  );
};

export default CertificationView;
