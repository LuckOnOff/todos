import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('ToDo-приложение', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Поле для ввода новой задачи отображается на экране', () => {
    const inputElement = screen.getByPlaceholderText(/Что должно быть сделано?/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('Фильтрует задачи при нажатии на кнопки', () => {
    const allButton = screen.getByRole('button', { name: /Все/i });
    const activeButton = screen.getByRole('button', { name: /Активные/i });
    const completedButton = screen.getByText(/Выполненные/i, { selector: '.category-completed' });
  
    expect(screen.getByText('Example1')).toBeInTheDocument();
    expect(screen.getByText('Example2')).toBeInTheDocument();
  
    fireEvent.click(activeButton);
    expect(screen.getByText('Example1')).toBeInTheDocument();
    expect(screen.queryByText('Example2')).toBeNull();
  
    fireEvent.click(completedButton);
    expect(screen.queryByText('Example1')).toBeNull();
    expect(screen.getByText('Example2')).toBeInTheDocument();
  
    fireEvent.click(allButton);
    expect(screen.getByText('Example1')).toBeInTheDocument();
    expect(screen.getByText('Example2')).toBeInTheDocument();
  });  

  test('Добавление новой задачи', () => {
    const inputElement = screen.getByPlaceholderText(/Что должно быть сделано?/i);
    const addButton = screen.getByRole('button', { name: /Добавить задачу/i });

    fireEvent.change(inputElement, { target: { value: 'Новая задача' } });
    fireEvent.click(addButton);

    const taskElement = screen.getByText(/Новая задача/i);
    expect(taskElement).toBeInTheDocument();
  });

  test('Отмечает задачу как выполненную', () => {
    const inputElement = screen.getByPlaceholderText(/Что должно быть сделано?/i);
    const addButton = screen.getByRole('button', { name: /Добавить задачу/i });

    fireEvent.change(inputElement, { target: { value: 'Сделать тест' } });
    fireEvent.click(addButton);

    const completeButton = screen.getAllByRole('button', { name: /Завершить/i });
    fireEvent.click(completeButton[0]);

    const taskElement = screen.getByText(/Example1/i);
    expect(taskElement).toHaveClass('completed');
  });

  test('Разделяет задачи на выполненные и невыполненные списки', () => {
    const inputElement = screen.getByPlaceholderText(/Что должно быть сделано?/i);
    const addButton = screen.getByRole('button', { name: /Добавить задачу/i });
  
    fireEvent.change(inputElement, { target: { value: 'Невыполненная задача' } });
    fireEvent.click(addButton);
  
    fireEvent.change(inputElement, { target: { value: 'Выполненная задача' } });
    fireEvent.click(addButton);
  
    const completeButtons = screen.getAllByLabelText(/Завершить/i);
    fireEvent.click(completeButtons[4]);
  
    const completedTask = screen.getByText('Выполненная задача');
    expect(completedTask).toHaveClass('completed');

    const uncompletedTask = screen.getByText('Невыполненная задача');
    expect(uncompletedTask).not.toHaveClass('completed');
  });

  test('Сохраняет корректный список при добавлении и завершении нескольких задач', () => {
    const inputElement = screen.getByPlaceholderText(/Что должно быть сделано?/i);
    const addButton = screen.getByRole('button', { name: /Добавить задачу/i });

    const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];
    
    tasks.forEach((task) => {
      fireEvent.change(inputElement, { target: { value: task } });
      fireEvent.click(addButton);
    });

    const completeButton = screen.getAllByRole('button', { name: /Завершить/i })[4];
    fireEvent.click(completeButton);

    const completedTask = screen.getByText(/Задача 2/i);
    expect(completedTask).toHaveClass('completed');

    const uncompletedTasks = [screen.getByText(/Задача 1/i), screen.getByText(/Задача 3/i)];
    uncompletedTasks.forEach((task) => expect(task).not.toHaveClass('completed'));
  });
});