import React, { useState } from 'react';
import { 
  Briefcase, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Plus, 
  Trash2, 
  Sparkles,
  ShieldCheck,
  Calendar,
  Send
} from 'lucide-react';

interface Task {
  id: string;
  time: string;
  text: string;
  completed: boolean;
  category: 'Operations' | 'Marketing' | 'Tech' | 'Personal';
}

export function ProfileDetails() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', time: '09:00 AM', text: 'Analyze morning AI dashboard & sales anomalies', completed: true, category: 'Operations' },
    { id: '2', time: '10:30 AM', text: 'Optimize checkout flow for UPI and Mobile Wallets', completed: false, category: 'Tech' },
    { id: '3', time: '01:00 PM', text: 'Beauty category inventory sync audit', completed: false, category: 'Operations' },
    { id: '4', time: '03:30 PM', text: 'Prepare the Executive Revenue Report', completed: false, category: 'Marketing' },
  ]);

  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState<'Operations' | 'Marketing' | 'Tech' | 'Personal'>('Operations');
  const [newTaskTime, setNewTaskTime] = useState('11:00 AM');

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      time: newTaskTime,
      text: newTaskText,
      completed: false,
      category: newTaskCategory
    };
    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <header className="flex justify-between items-end mb-2 shrink-0">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Lead Profile & Daily Planner</h1>
          <p className="text-slate-500">Personal workspace and performance hub for the E-commerce Lead</p>
        </div>
        <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100">
          <ShieldCheck className="w-4 h-4 text-indigo-600" />
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-700">Role: E-Commerce Lead</span>
        </div>
      </header>

      {/* Main Profile Info Card */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-50/50 rounded-full -mr-32 -mt-32 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Avatar with status indicator */}
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-700 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-indigo-100">
              S
            </div>
            <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full animate-pulse"></span>
          </div>

          <div className="flex-1 space-y-3">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Sritha</h2>
              <p className="text-indigo-600 font-semibold flex items-center gap-2 text-sm mt-0.5">
                <Briefcase size={16} /> E-commerce Lead & Growth Architect
              </p>
            </div>

            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Mail size={16} className="text-slate-400" /> sritha@ecommerce-planner.ai
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-slate-400" /> HQ (Hybrid)
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={16} className="text-slate-400" /> Shift: Morning Briefing Zone
              </span>
            </div>

            <p className="text-slate-600 max-w-2xl text-sm leading-relaxed">
              As E-commerce Lead, Sritha spearheads sales trend analysis, inventory forecasting, and digital checkout optimization. 
              She bridges data-driven AI insights with operational workflows to drive total revenue, improve user checkout retention, and eliminate operational bottlenecks.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Core Credentials & Focus Areas */}
        <div className="space-y-6 lg:col-span-1">
          {/* Qualifications & KPIs Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
              <Award className="text-indigo-600" size={20} /> Focus & Metrics
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                  <span>Conversion Rate Target</span>
                  <span className="text-indigo-600 font-bold">4.2% / 4.5%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '93%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                  <span>Customer Satisfaction</span>
                  <span className="text-emerald-600 font-bold">98% / 95%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                  <span>Checkout Friction Solved</span>
                  <span className="text-blue-600 font-bold">85% / 90%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-1 bg-indigo-50 text-indigo-600 rounded mt-0.5">
                  <TrendingUp size={14} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Growth Catalyst</h4>
                  <p className="text-xs text-slate-500">Boosted UPI & wallet sales volume by 35% through custom integrations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1 bg-emerald-50 text-emerald-600 rounded mt-0.5">
                  <CheckCircle size={14} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Operational Excellence</h4>
                  <p className="text-xs text-slate-500">Successfully resolved 5 major distribution & stock bottlenecks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Assistant Info / Quick Contact */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 shadow-md">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Sparkles className="text-indigo-400" size={18} /> AI Workspace Integration
            </h3>
            <p className="text-xs text-indigo-200 leading-relaxed mb-4">
              Sritha’s daily planner is continuously updated with real-time analytics. Whenever a conversion drops or a high-rating category shifts, the AI updates her agenda instantly.
            </p>
            <div className="bg-white/10 p-3 rounded-xl border border-white/10 flex items-center justify-between">
              <span className="text-xs font-medium text-white">Interactive Planner Connection</span>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-500 text-white px-1.5 py-0.5 rounded">Active</span>
            </div>
          </div>
        </div>

        {/* Sritha's Dynamic Daily Planner */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Calendar size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Interactive Daily Agenda</h3>
                  <p className="text-xs text-slate-500">Plan and track tasks synced to Sritha's position</p>
                </div>
              </div>
              <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                {tasks.filter(t => t.completed).length} / {tasks.length} Completed
              </span>
            </div>

            {/* Task Add Form */}
            <form onSubmit={addTask} className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="md:col-span-2">
                <label className="block text-[10px] uppercase tracking-wider font-bold text-slate-500 mb-1">Task Description</label>
                <input 
                  type="text" 
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  placeholder="e.g. Schedule payment gateway review"
                  className="w-full text-sm px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-slate-500 mb-1">Time</label>
                <input 
                  type="text" 
                  value={newTaskTime}
                  onChange={(e) => setNewTaskTime(e.target.value)}
                  placeholder="e.g. 02:00 PM"
                  className="w-full text-sm px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex items-end">
                <button 
                  type="submit" 
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Plus size={14} /> Add Task
                </button>
              </div>
            </form>

            {/* Tasks List */}
            <div className="space-y-3 flex-1 overflow-y-auto max-h-[380px] pr-1">
              {tasks.length === 0 ? (
                <div className="text-center py-10 text-slate-400 text-sm">
                  No tasks scheduled. Create one above to optimize Sritha's day!
                </div>
              ) : (
                tasks.map(task => (
                  <div 
                    key={task.id} 
                    className={`flex items-center gap-4 p-3.5 rounded-xl border transition-all ${
                      task.completed 
                        ? 'bg-slate-50 border-slate-200 text-slate-400 line-through' 
                        : 'bg-white border-slate-100 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <button 
                      type="button"
                      onClick={() => toggleTask(task.id)}
                      className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                        task.completed 
                          ? 'bg-indigo-600 border-indigo-600 text-white' 
                          : 'border-slate-300 hover:border-indigo-500'
                      }`}
                    >
                      {task.completed && <CheckCircle size={14} className="stroke-[3px]" />}
                    </button>

                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold truncate ${task.completed ? 'text-slate-400' : 'text-slate-800'}`}>
                        {task.text}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                          <Clock size={10} /> {task.time}
                        </span>
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                          task.category === 'Operations' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                          task.category === 'Marketing' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                          task.category === 'Tech' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          {task.category}
                        </span>
                      </div>
                    </div>

                    <button 
                      onClick={() => deleteTask(task.id)}
                      className="p-1.5 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-lg transition-colors shrink-0"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
