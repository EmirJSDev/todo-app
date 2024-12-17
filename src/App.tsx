import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Checkbox,
    IconButton,
    Box,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CssBaseline } from "@mui/material";

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

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

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask("");
        }
    };

    const toggleTask = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const clearCompleted = () => {
        setTasks(tasks.filter((task) => !task.completed));
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="sm" sx={{
                background: '#fff',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                marginTop: '50px',
                padding: '20px',
            }}>
                <Typography variant="h3" component="h1" align="center" sx={{
                    fontSize: '4rem',
                    color: '#b83f45',
                    marginBottom: '1rem',
                    textDecoration: 'line-through',
                    paddingBottom: '1rem',
                }}>
                    todos
                </Typography>
                <Box sx={{ display: 'flex', padding: '15px' }}>
                    <TextField
                        fullWidth
                        label="What needs to be done?"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addTask()}
                        sx={{
                            flexGrow: 1,
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px 0 0 5px',
                            fontSize: '16px'
                        }}
                    />
                    <Button variant="contained" color="primary" onClick={addTask} sx={{
                        backgroundColor: '#b83f45',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '0 5px 5px 0',
                        cursor: 'pointer'
                    }}>
                        Add
                    </Button>
                </Box>
                <List sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {filteredTasks.map((task) => (
                        <ListItem key={task.id} secondaryAction={
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => deleteTask(task.id)}
                                sx={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '18px',
                                    color: '#b83f45',
                                    cursor: 'pointer'
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        } sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px 15px',
                            borderBottom: '1px solid #eee',
                            color: task.completed ? '#ccc' : 'inherit',
                            textDecoration: task.completed ? 'line-through' : 'none'
                        }}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={task.completed}
                                    onChange={() => toggleTask(task.id)}
                                />
                            </ListItemIcon>
                            <ListItemText primary={task.text} />
                        </ListItem>
                    ))}
                </List>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 15px',
                    fontSize: '14px',
                    color: '#777',
                    borderTop: '1px solid #eee'
                }}>
                    <span>{tasks.filter((t) => !t.completed).length} items left</span>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#777',
                    }}>
                        <Button
                            sx={{
                                background: 'none',
                                border: 'none',
                                color: '#777',
                                cursor: 'pointer',
                                margin: '0 5px',
                                fontWeight: filter === "all" ? 'bold' : 'normal'
                            }}
                            onClick={() => setFilter("all")}
                        >
                            All
                        </Button>
                        <Button
                            sx={{
                                background: 'none',
                                border: 'none',
                                color: '#777',
                                cursor: 'pointer',
                                margin: '0 5px',
                                fontWeight: filter === "active" ? 'bold' : 'normal'
                            }}
                            onClick={() => setFilter("active")}
                        >
                            Active
                        </Button>
                        <Button
                            sx={{
                                background: 'none',
                                border: 'none',
                                color: '#777',
                                cursor: 'pointer',
                                margin: '0 5px',
                                fontWeight: filter === "completed" ? 'bold' : 'normal'
                            }}
                            onClick={() => setFilter("completed")}
                        >
                            Completed
                        </Button>
                    </Box>
                    <Button onClick={clearCompleted} sx={{
                        background: 'none',
                        border: 'none',
                        color: '#b83f45',
                        cursor: 'pointer'
                    }}>
                        Clear completed
                    </Button>
                </Box>
            </Container>
            <Typography
                align="center"
                sx={{ color: '#607d8b', fontWeight: 400, marginTop: '20px', fontSize: '1 rem' }}
            >
                Developed by Emir Abdurakhimov
            </Typography>
        </ThemeProvider>
    );
};

export default App;
