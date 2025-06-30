// app/head.js

export default function Head() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              try {
                const theme = localStorage.getItem("theme");
                if (theme === "dark" || !theme) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              } catch (_) {}
            })();
          `,
        }}
      />
    </>
  );
}
