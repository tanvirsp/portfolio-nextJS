import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { MdOutlineMailOutline, MdWhatsapp } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Have an idea to discuss? Shoot me an email if you want to connect!
            You can also find me on
            <Link
              href="https://www.linkedin.com/in/mir-raisul-tanvir-7125b9134"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>
            or if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <div>
            <div className={styles.contactEmail}>
              <MdOutlineMailOutline size="2.4rem" />
              <span>tanvirgrahic@gmail.com</span>
            </div>
            <div className={styles.contactEmail}>
              <IoCallOutline size="2.4rem" /> <span>+8801722199479</span>
            </div>

            <div className={styles.contactEmail}>
              <MdWhatsapp size="2.4rem" />
              <Link
                href="https://wa.me/8801722199479"
                target="_blank"
                rel="noopener noreferrer"
              >
                +8801722199479
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
