import styles from "@/app/(styles)/login.module.css";

const SplashMessage = () => {
  return (
    <div className={styles.description}>
      <p> Welcome to the queue management app.</p>
      <p>
        {" "}
        With this app, you can more easily manage queues while working as a ULA
        at Oregon State University.
      </p>
      <p>
        {" "}
        Instead of students sending a barage of Teams messages, they can now add
        themselves to your office hour queue, allowing you to use the web app
        interface to track students in need of assistance in the order in which
        they joined the queue.
      </p>
      <p>
        By sharing a unique session URL, students can add themselves to your
        queue along with a brief message regarding what they need assistance
        with. Once it is a students turn for assistance, you can easily message
        them on Microsoft Teams using a single button click.
      </p>
      <p>
        Once you have finished assisting a student, you can remove them from
        your queue and it is on to the next!
      </p>
    </div>
  );
};

export default SplashMessage;
