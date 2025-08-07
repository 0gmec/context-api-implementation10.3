
export interface TodoItem  {
id: string | number
text: string
completed: boolean
}

export interface Filter {
    filter: 'all' | 'active' | 'completed'
}

export interface Theme {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}