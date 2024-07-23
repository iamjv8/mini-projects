"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCircle, FaAngleRight } from "react-icons/fa";
import styles from "./styles.module.css";

const Node = ({ label, link, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isParentNode = Boolean(children?.length);
  return (
    <li>
      <div className={styles.node}>
        <div className={styles.label}>
          {isParentNode ? (
            <motion.span
              onClick={() => setIsOpen(!isOpen)}
              animate={{ rotate: isOpen ? 90 : 0 }}
            >
              <FaAngleRight
                className={styles.arrowIcon}
                onClick={() => setIsOpen(!isOpen)}
              />
            </motion.span>
          ) : (
            <FaCircle className={styles.circleIcon} />
          )}

          <a href={link}>{label}</a>
        </div>
      </div>
      <AnimatePresence>
        {isParentNode && isOpen ? (
          <motion.div
            className={styles.nodeContent}
            variants={{
              collapsed: { height: 0, opacity: 0 },
              open: { height: "auto", opacity: 1 },
            }}
            transition={{ duration: 0.2 }}
            initial="collapsed"
            animate="open"
            exit="collapsed"
          >
            <Nodes nodes={children} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
};

const Nodes = ({ nodes }) => {
  return (
    <ul className={styles.nodes}>
      {nodes.map((node) => {
        return <Node key={node.id} {...node} />;
      })}
    </ul>
  );
};

export default Nodes;
