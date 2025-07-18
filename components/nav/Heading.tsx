import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      {/* <div className={styles.headingButtons}> */}

      <OutlineButton onClick={() => window.open("https://drive.google.com/file/d/1p3iITYjzBvfFKZP2Z9tHexQ8OcsGo4Mf/view")}>
        My resume
      </OutlineButton>
      {/* </div> */}
    </header>
  );
};


