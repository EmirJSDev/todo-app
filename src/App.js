import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, ListItemIcon, Checkbox, IconButton, Box, ThemeProvider, createTheme, } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CssBaseline } from "@mui/material";
const theme = createTheme({
    palette: {
        primary: {
            main: "#b83f45",
        },
        background: {
            default: "#f5f5f5",
        },
    },
    typography: {
        fontFamily: "'Open Sans', sans-serif",
        h3: {
            fontWeight: 300,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '20px',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fff",
                    borderRadius: '20px',
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "#ccc",
                        },
                        "&:hover fieldset": {
                            borderColor: "#999",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#b83f45",
                        },
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    borderRadius: '5px',
                    "&:hover": {
                        backgroundColor: "#f0f0f0",
                    },
                },
            },
        },
    },
});
const App = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    const [newTask, setNewTask] = useState("");
    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask("");
        }
    };
    const toggleTask = (id) => {
        setTasks(tasks.map((task) => task.id === id ? Object.assign(Object.assign({}, task), { completed: !task.completed }) : task));
    };
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };
    const clearCompleted = () => {
        setTasks(tasks.filter((task) => !task.completed));
    };
    const filteredTasks = tasks.filter((task) => {
        if (filter === "active")
            return !task.completed;
        if (filter === "completed")
            return task.completed;
        return true;
    });
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsxs(Container, { maxWidth: "sm", sx: {
                    background: '#fff',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    marginTop: '50px',
                    padding: '20px',
                }, children: [_jsx(Typography, { variant: "h3", component: "h1", align: "center", sx: {
                            fontSize: '4rem',
                            color: '#b83f45',
                            marginBottom: '1rem',
                            textDecoration: 'line-through',
                            paddingBottom: '1rem',
                        }, children: "todos" }), _jsxs(Box, { sx: { display: 'flex', padding: '15px' }, children: [_jsx(TextField, { fullWidth: true, label: "What needs to be done?", value: newTask, onChange: (e) => setNewTask(e.target.value), onKeyDown: (e) => e.key === "Enter" && addTask(), sx: {
                                    flexGrow: 1,
                                    padding: '10px',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px 0 0 5px',
                                    fontSize: '16px'
                                } }), _jsx(Button, { variant: "contained", color: "primary", onClick: addTask, sx: {
                                    backgroundColor: '#b83f45',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 20px',
                                    borderRadius: '0 5px 5px 0',
                                    cursor: 'pointer'
                                }, children: "Add" })] }), _jsx(List, { sx: { listStyle: 'none', padding: 0, margin: 0 }, children: filteredTasks.map((task) => (_jsxs(ListItem, { secondaryAction: _jsx(IconButton, { edge: "end", "aria-label": "delete", onClick: () => deleteTask(task.id), sx: {
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '18px',
                                    color: '#b83f45',
                                    cursor: 'pointer'
                                }, children: _jsx(DeleteIcon, {}) }), sx: {
                                display: 'flex',
                                alignItems: 'center',
                                padding: '10px 15px',
                                borderBottom: '1px solid #eee',
                                color: task.completed ? '#ccc' : 'inherit',
                                textDecoration: task.completed ? 'line-through' : 'none'
                            }, children: [_jsx(ListItemIcon, { children: _jsx(Checkbox, { checked: task.completed, onChange: () => toggleTask(task.id) }) }), _jsx(ListItemText, { primary: task.text })] }, task.id))) }), _jsxs(Box, { sx: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px 15px',
                            fontSize: '14px',
                            color: '#777',
                            borderTop: '1px solid #eee'
                        }, children: [_jsxs("span", { children: [tasks.filter((t) => !t.completed).length, " items left"] }), _jsxs(Box, { sx: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#777',
                                }, children: [_jsx(Button, { sx: {
                                            background: 'none',
                                            border: 'none',
                                            color: '#777',
                                            cursor: 'pointer',
                                            margin: '0 5px',
                                            fontWeight: filter === "all" ? 'bold' : 'normal'
                                        }, onClick: () => setFilter("all"), children: "All" }), _jsx(Button, { sx: {
                                            background: 'none',
                                            border: 'none',
                                            color: '#777',
                                            cursor: 'pointer',
                                            margin: '0 5px',
                                            fontWeight: filter === "active" ? 'bold' : 'normal'
                                        }, onClick: () => setFilter("active"), children: "Active" }), _jsx(Button, { sx: {
                                            background: 'none',
                                            border: 'none',
                                            color: '#777',
                                            cursor: 'pointer',
                                            margin: '0 5px',
                                            fontWeight: filter === "completed" ? 'bold' : 'normal'
                                        }, onClick: () => setFilter("completed"), children: "Completed" })] }), _jsx(Button, { onClick: clearCompleted, sx: {
                                    background: 'none',
                                    border: 'none',
                                    color: '#b83f45',
                                    cursor: 'pointer'
                                }, children: "Clear completed" })] })] }), _jsx(Typography, { align: "center", sx: { color: '#607d8b', fontWeight: 400, marginTop: '20px', fontSize: '1 rem' }, children: "Developed by Emir Abdurakhimov" })] }));
};
export default App;
