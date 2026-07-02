import React, { useState } from 'react';
import { 
  Zap, 
  LayoutDashboard, 
  TrendingUp, 
  UserCheck, 
  Package
} from 'lucide-react';
import { Overview } from './components/Overview';
import { SalesTrends } from './components/SalesTrends';
import { CustomerProfiles } from './components/CustomerProfiles';
import { InventoryInsights } from './components/InventoryInsights';
import { ProfileDetails } from './components/ProfileDetails';

type Tab = 'overview' | 'sales' | 'customers' | 'inventory' | 'profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <Overview />;
      case 'sales': return <SalesTrends />;
      case 'customers': return <CustomerProfiles />;
      case 'inventory': return <InventoryInsights />;
      case 'profile': return <ProfileDetails />;
      default: return <Overview />;
    }
  };

  const NavItem = ({ id, icon: Icon, label }: { id: Tab; icon: React.ElementType; label: string }) => {
    const isActive = activeTab === id;
    return (
      <button 
        onClick={() => setActiveTab(id)}
        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${isActive ? 'bg-slate-800 text-white font-medium' : 'hover:bg-slate-800 text-slate-300'}`}
      >
         <Icon className="w-5 h-5" />
         {label}
      </button>
    );
  };

  return (
    <div className="h-screen w-full bg-slate-50 flex font-sans text-slate-900 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 flex flex-col p-6 text-slate-300 flex-shrink-0">
        <div className="flex items-center gap-3 mb-10 text-white font-bold text-xl">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
             <Zap className="w-5 h-5 text-white" />
          </div>
          <span>DailyPlanner AI</span>
        </div>
        <nav className="space-y-4 flex-grow">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Analytics Engine</div>
          <NavItem id="overview" icon={LayoutDashboard} label="Overview" />
          <NavItem id="sales" icon={TrendingUp} label="Sales Trends" />
          <NavItem id="customers" icon={UserCheck} label="Customer Profiles" />
          <NavItem id="inventory" icon={Package} label="Inventory Insights" />
        </nav>
        <div className="mt-auto pt-6 border-t border-slate-800">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all duration-200 text-left ${
              activeTab === 'profile' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30 font-semibold' 
                : 'hover:bg-slate-800/80 text-slate-300'
            }`}
          >
             <div className="w-10 h-10 rounded-full bg-blue-400 flex-shrink-0 flex items-center justify-center font-bold text-slate-900 shadow-inner">
               S
             </div>
             <div className="min-w-0 flex-1">
               <p className={`text-sm font-bold truncate ${activeTab === 'profile' ? 'text-white' : 'text-white'}`}>Sritha</p>
               <p className={`text-xs truncate ${activeTab === 'profile' ? 'text-blue-100' : 'text-slate-500'}`}>E-commerce Lead</p>
             </div>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col p-8 gap-6 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

