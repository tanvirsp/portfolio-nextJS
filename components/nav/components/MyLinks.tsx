import styles from "./headinglinks.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiFillSkype,
  AiFillFacebook
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link href="https://www.linkedin.com/in/mir-raisul-tanvir-7125b9134" target="_blank" rel="nofollow">
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>
      
      {/* <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://join.skype.com/invite/vKVMgi5SGjvM" target="_blank" rel="nofollow">
          <AiFillSkype size="2.4rem" />
        </Link>
      </motion.span> */}

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://github.com/tanvirsp" target="_blank" rel="nofollow">
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="https://www.instagram.com/mirtanvir05/" target="_blank" rel="nofollow">
          <AiFillInstagram size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="https://www.facebook.com/tanvir.shawon.180" target="_blank" rel="nofollow">
          <AiFillFacebook size="2.4rem" />
        </Link>
      </motion.span>
    </div>
  );
};
