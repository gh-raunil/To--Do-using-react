import React, { useState, useEffect } from "react";
import { IconCircleCheck, IconXboxX, IconBackspace } from "@tabler/icons-react";

const ToDoMain = ({ onOpen }) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add new task with its own done flag
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, done: false }]);
      setTask("");
    }
  };

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="flex md:justify-start items-center flex-col w-[100%] h-[100%] bg-gradient-to-bl to-[#3f87a6] from-[#ebf8e1] rounded-xl shadow-2xl rounded-br-4xl rounded-tl-4xl shadow-blue-400 p-5">
        <div className="absolute right-7 top-4 md:right-10 md:top-5">
          <button onClick={onOpen} className="cursor-pointer">
            Back
          </button>
        </div>

        <div className="bg-white/30 backdrop-blur-md rounded-xl px-5 py-1 mb-5 mt-5 sm:mt-0">
          <h1>Work List</h1>
          <p>Plan it. Do it. Mark it off.</p>
        </div>

        <div className="w-[110%] md:w-[100%] max-h-[500px] border border-gray-400 rounded-2xl flex flex-col overflow-y-hidden justify-center items-center bg-white/10 backdrop-blur-3xl pb-5">
          <div className="w-[95%] flex justify-between items-center px-3 py-1 bg-white/30 backdrop-blur-md rounded-lg mt-5 mb-3">
            <input
              onChange={(e) => setTask(e.target.value)}
              value={task}
              type="text"
              className="p-1 w-50 sm:w-100 focus:outline-none"
              placeholder="Your Task"
            />
            <button onClick={addTask} className="pr-2 p-2 focus:outline-none">
              Add
            </button>
          </div>

          <div className="tasks overflow-y-auto w-[99%] h-[100%]">
            <ul className="flex flex-col items-center">
              {tasks.map((t, index) => (
                <li
                  key={index}
                  className="py-1 w-[95%] bg-white/30 backdrop-blur-md flex items-start justify-between rounded-lg mt-2 px-3"
                >
                  {/* Task text */}
                  <span
                    className={
                      "whitespace-normal break-all flex-1 mr-2" +
                      (t.done ? " line-through text-gray-500" : "")
                    }
                  >
                    {t.text}
                  </span>

                  {/* Toggle Done/Not Done */}
                  <div>
                    {t.done ? (
                      <button
                        onClick={() =>
                          setTasks(
                            tasks.map((item, i) =>
                              i === index ? { ...item, done: false } : item
                            )
                          )
                        }
                        className="ml-2 text-[#E5F4E1]"
                      >
                        <IconXboxX stroke={2} />
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          setTasks(
                            tasks.map((item, i) =>
                              i === index ? { ...item, done: true } : item
                            )
                          )
                        }
                        className="ml-2 text-[#4188A7]"
                      >
                        <IconCircleCheck stroke={2} />
                      </button>
                    )}
                  </div>

                  {/* Delete Task */}
                  <div>
                    <button
                      onClick={() =>
                        setTasks(tasks.filter((_, i) => i !== index))
                      }
                      className="ml-2 text-[#5BA4EC]"
                    >
                      <IconBackspace stroke={2} />
                    </button>
                  </div>
                </li>
              ))}
              {tasks.length === 0 && (
                <li className="text-sm text-gray-700 my-3">No tasks yet — add one!</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoMain;
