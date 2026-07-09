import { useState } from "react";
import { projects } from "./projects.js";
import IconButton from "@mui/material/IconButton";
import Pagination from "@mui/material/Pagination";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

const categories = ["PROGRAMS", "GAMES", "ARTWORKS", "ANIMATIONS", "3D MODEL"];

function Works() {
  const [category, setCategory] = useState(categories[0]);
  const [zoomedIndex, setZoomedIndex] = useState(null);
  const [angleIndex, setAngleIndex] = useState(0);

  const filteredWorks = projects.filter(
    (work) => work.type.toUpperCase() === category
  );

  const zoomedWork = zoomedIndex !== null ? filteredWorks[zoomedIndex] : null;
  const hasMultipleAngles = zoomedWork?.images && zoomedWork.images.length > 1;

  const openWork = (index) => {
    setZoomedIndex(index);
    setAngleIndex(0);
  };

  // Corner arrows now ONLY move between projects
  const showNextProject = (e) => {
    e.stopPropagation();
    setZoomedIndex((prev) => (prev + 1) % filteredWorks.length);
    setAngleIndex(0);
  };

  const showPrevProject = (e) => {
    e.stopPropagation();
    setZoomedIndex((prev) => (prev - 1 + filteredWorks.length) % filteredWorks.length);
    setAngleIndex(0);
  };

  // Pagination handles angle switching within the SAME project
  const handleAngleChange = (event, value) => {
    setAngleIndex(value - 1); // MUI Pagination is 1-indexed
  };

  const getCurrentMedia = () => {
    if (!zoomedWork) return null;
    if (zoomedWork.videoSrc) return { type: "video", src: zoomedWork.videoSrc };
    if (zoomedWork.images) {
      return {
        type: "image",
        src: zoomedWork.images[angleIndex].src,
        caption: zoomedWork.images[angleIndex].caption,
      };
    }
    if (zoomedWork.image) return { type: "image", src: zoomedWork.image.src, caption: zoomedWork.image.caption };
    return null;
  };

  const currentMedia = getCurrentMedia();

  return (
    <section id="works" className="works">
      <h2 className="section-title"><span>Works</span></h2>

      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="works-grid">
        {filteredWorks.map((work, index) => (
          <div key={work.id} className="work-card" onClick={() => openWork(index)}>
            <div className="work-image">
              {work.videoSrc ? (
                <video src={work.videoSrc} muted />
              ) : (
                <img
                  src={work.images ? work.images[0].src : work.image.src}
                  alt={work.title}
                />
              )}
            </div>
            <div className="work-footer">
              <span className="work-title">{work.title}</span>
              <span className="work-category">{work.typeLabel}</span>
            </div>
          </div>
        ))}
      </div>

      {zoomedWork && currentMedia && (
        <div className="zoom-overlay" onClick={() => setZoomedIndex(null)}>
          <IconButton className="zoom-close" onClick={() => setZoomedIndex(null)}>
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>

          {/* Corner arrows = switch PROJECT */}
          <IconButton className="zoom-arrow zoom-arrow-left" onClick={showPrevProject}>
            <ArrowBackIosNewIcon sx={{ color: "#fff" }} />
          </IconButton>

          <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
            <div className="zoom-info">
              <h3 className="zoom-title">{zoomedWork.title}</h3>
              {zoomedWork.subtitle && <p className="zoom-subtitle">{zoomedWork.subtitle}</p>}
              <p className="zoom-description">{zoomedWork.description}</p>

              {zoomedWork.tags && (
                <div className="zoom-tags">
                  {zoomedWork.tags.map((tag) => (
                    <span key={tag} className="zoom-tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>

            <div className="zoom-media-wrapper">
              {currentMedia.type === "video" ? (
                <video src={currentMedia.src} controls autoPlay className="zoom-media" />
              ) : (
                <img src={currentMedia.src} alt={zoomedWork.title} className="zoom-media" />
              )}

              {/* Pagination = switch ANGLE, lives right under this project's image */}
              {hasMultipleAngles && (
                <div className="angle-pagination">
                  {currentMedia.caption && (
                    <p className="zoom-angle-label">{currentMedia.caption}</p>
                  )}
                  <Pagination
                    count={zoomedWork.images.length}
                    page={angleIndex + 1}
                    onChange={handleAngleChange}
                    size="small"
                    sx={{
                      "& .MuiPaginationItem-root": { color: "#fff" },
                      "& .Mui-selected": {
                        backgroundColor: "#75caff !important",
                        color: "#000",
                      },
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          <IconButton className="zoom-arrow zoom-arrow-right" onClick={showNextProject}>
            <ArrowForwardIosIcon sx={{ color: "#fff" }} />
          </IconButton>
        </div>
      )}
    </section>
  );
}

export default Works;