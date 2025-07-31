import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      {/* <div className={styles.headingButtons}> */}

      <OutlineButton onClick={() => window.open("https://drive.google.com/file/d/18DXqZ3tKQh5xjGLkhI0MpWp3NwudWjCq/view")}>
        My resume
      </OutlineButton>
      {/* </div> */}
    </header>
  );
};


