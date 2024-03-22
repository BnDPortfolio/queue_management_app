import styles from "../page.module.css";

export default function Page() {
    return (
    <main className={styles.main}>
        <h1>ULA View Page</h1>
        <div>
            <h3> We want the queue to go here... </h3>

            <div>
                <li>
                    Student 1
                </li>
                <li>
                    Student 2
                </li>
                <li>
                    Student 3
                </li>
            </div>
        </div>
    </main>
    
    );
  }