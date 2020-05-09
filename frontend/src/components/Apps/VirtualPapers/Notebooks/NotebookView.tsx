import React from "react";
import { INotebook } from "actions/VirtualPaper/types";
import VirtualPaperView from "./VirtualPaperView";
import store from "store";
import { createVirtualPaper } from "actions/VirtualPaper";

interface StateToProps {
  notebook: INotebook;
}

type Props = StateToProps;

const NotebookView: React.FC<Props> = ({ notebook }) => {
  return (
    <div className="">
      <h1>Notebook {notebook.id}</h1>
      <div>
        {notebook.virtual_papers.map((virtualPaper) => (
          <VirtualPaperView key={virtualPaper.id} virtualPaper={virtualPaper} />
        ))}
      </div>
      <div>
        <button
          className="py-2 px-4 bg-blue-500 text-white"
          onClick={() => {
            let title = prompt("Insira o título do virtual paper?");
            if (title)
              store.dispatch(
                createVirtualPaper({
                  notebookId: notebook.id,
                  virtualPaper: { title },
                })
              );
            // store.dispatch({
            //   type: VirtualPapersActionTypes.VIRTUAL_PAPER_CREATED,
            //   payload: {
            //     notebookId: 1,
            //     virtualPaper: { id: 2, title: "Fine" },
            //   },
            // });
          }}
        >
          Create Virtual Paper
        </button>
      </div>
    </div>
  );
};

export default NotebookView;
