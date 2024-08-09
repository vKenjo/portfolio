import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [searchText, setSearchText] = useState('');
    const [filterCategory, setFilterCategory] = useState([]);
    const [filterPriority, setFilterPriority] = useState([]);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);
    const [editTodo, setEditTodo] = useState(null); 

    // Change this baseURL to your API Gateway URL
    const baseURL = 'https://a4n66gk1hd.execute-api.ap-southeast-1.amazonaws.com/';
    const ownerName = 'Josh Kenn Viray';
    
    const categoryDropdownRef = useRef(null);
    const priorityDropdownRef = useRef(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`${baseURL}/todos`);
                setTodos(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTodos();
    }, []);

    const handleClickOutside = (event) => {
        if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
            setShowCategoryDropdown(false);
        }
        if (priorityDropdownRef.current && !priorityDropdownRef.current.contains(event.target)) {
            setShowPriorityDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const addTodo = async () => {
        if (!newTodo.trim()) return;
        try {
            const response = await axios.put(`${baseURL}/todos`, { text: newTodo, due_date: dueDate, category, priority });
            setTodos([response.data, ...todos]);
            setNewTodo('');
            setDueDate('');
            setCategory('');
            setPriority('Medium');
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    const updateTodo = async () => {
        if (!editTodo.text.trim()) return;
        try {
            const response = await axios.put(`${baseURL}/todos/${editTodo.id}`, {
                text: editTodo.text,
                due_date: editTodo.due_date,
                category: editTodo.category,
                priority: editTodo.priority,
            });
            setTodos(todos.map(todo => (todo.id === editTodo.id ? response.data : todo)));
            setEditTodo(null);
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    const toggleComplete = async (id, completed) => {
        try {
            const response = await axios.put(`${baseURL}/todos/${id}`, { completed: !completed });
            setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
        } catch (error) {
            console.error("Error toggling complete:", error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`${baseURL}/todos/${id}`);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    const handleCategoryChange = (category) => {
        if (filterCategory.includes(category)) {
            setFilterCategory(filterCategory.filter(c => c !== category));
        } else {
            setFilterCategory([...filterCategory, category]);
        }
    };

    const handlePriorityChange = (priority) => {
        if (filterPriority.includes(priority)) {
            setFilterPriority(filterPriority.filter(p => p !== priority));
        } else {
            setFilterPriority([...filterPriority, priority]);
        }
    };

    const filteredTodos = todos.filter(todo =>
        todo.text?.toLowerCase().includes(searchText?.toLowerCase()) &&
        (filterCategory.length === 0 || filterCategory.includes(todo.category)) &&
        (filterPriority.length === 0 || filterPriority.includes(todo.priority))
    );

    const uniqueCategories = [...new Set(todos.map(todo => todo.category).filter(c => c))];
    const uniquePriorities = ['High', 'Medium', 'Low'];

    return (
        <div className="todo-list">
            <h1>{ownerName}'s To-Do List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button className="add-btn" onClick={addTodo}>Add</button>

            {editTodo && (
                <div className="edit-todo">
                    <h2>Edit Todo</h2>
                    <input
                        type="text"
                        value={editTodo.text}
                        onChange={(e) => setEditTodo({ ...editTodo, text: e.target.value })}
                        placeholder="Edit task"
                    />
                    <input
                        type="text"
                        value={editTodo.category}
                        onChange={(e) => setEditTodo({ ...editTodo, category: e.target.value })}
                        placeholder="Category"
                    />
                    <input
                        type="date"
                        value={editTodo.due_date}
                        onChange={(e) => setEditTodo({ ...editTodo, due_date: e.target.value })}
                    />
                    <select value={editTodo.priority} onChange={(e) => setEditTodo({ ...editTodo, priority: e.target.value })}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <button className="update-btn" onClick={updateTodo}>Update</button>
                    <button className="cancel-btn" onClick={() => setEditTodo(null)}>Cancel</button>
                </div>
            )}

            <h2>Search and Filter</h2>
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search tasks"
            />
            <div className="filter-container">
                <div ref={categoryDropdownRef} className="dropdown">
                    <button
                        className="dropdown-button"
                        onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                    >
                        Filter by Category
                    </button>
                    {showCategoryDropdown && (
                        <div className="dropdown-menu">
                            {uniqueCategories.map(category => (
                                <label key={category}>
                                    <input
                                        type="checkbox"
                                        checked={filterCategory.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                    />
                                    {category}
                                </label>
                            ))}
                        </div>
                    )}
                </div>
                <div ref={priorityDropdownRef} className="dropdown">
                    <button
                        className="dropdown-button"
                        onClick={() => setShowPriorityDropdown(!showPriorityDropdown)}
                    >
                        Filter by Priority
                    </button>
                    {showPriorityDropdown && (
                        <div className="dropdown-menu">
                            {uniquePriorities.map(priority => (
                                <label key={priority}>
                                    <input
                                        type="checkbox"
                                        checked={filterPriority.includes(priority)}
                                        onChange={() => handlePriorityChange(priority)}
                                    />
                                    {priority}
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="task-header">
                <span>Task</span>
                <span>Category</span>
                <span>Priority</span>
                <span>Due Date</span>
                <span>Action</span>
            </div>
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        <span
                            style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                            onClick={() => toggleComplete(todo.id, todo.completed)}
                        >
                            {todo.text}
                        </span>
                        <span>{todo.category || 'None'}</span>
                        <span>{todo.priority || 'Medium'}</span>
                        <span>{todo.due_date ? new Date(todo.due_date).toLocaleDateString() : 'No due date'}</span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => setEditTodo(todo)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
