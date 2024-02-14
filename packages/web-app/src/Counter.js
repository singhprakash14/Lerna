import { h, patch } from "@analysst/ui";

export default function Counter() {
  let count = 0;
  let message = ""; 

  function increment() {
    count++;
    updateView();
    showMessage(`Count: ${count}`); 
  }

  function updateView() {
    const newVTree = view();
    patch(vTree, newVTree);
    vTree = newVTree;
  }

  function showMessage(msg) {
    message = msg; 
    updateView();
  }

  const lifeCycle = {
    create: () => console.log("Counter component mounted"),
    update: () => console.log("Counter component updated"),
    destroy: () => console.log("Counter component destroyed"),
  };

  function view() {
    return h("div", { style: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" } }, [
      h("div", { style: { border: "solid 1px black", padding: "20px", textAlign: "center" } }, [
          h("h1", { class: "counter-text", style: { color: "blue", fontSize: "24px" } }, `${count}`),
          h("button", {
            class: "counter-button",
            style: {
                borderRadius: "20px",
                border: "2px solid #9b59b6",
                color: "#9b59b6",
                backgroundColor: "#fff",
                margin: "10px"
            },
            on: { click: increment }
        }, "Add"),
          
        h("style", `
        .counter-button:hover {
            background-color: #9b59b6;
            color: #fff;
        }
    `),
          h("div", { class: "message", style: { fontStyle: "italic", color: "gray" } }, message)
      ])
  ]);
  }

  let vTree = view();
  return vTree;
}
