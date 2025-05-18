import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const DashboardPage = () => {
  // Sample data for dashboard
  const stats = [
    { id: 1, name: 'Total Users', value: '12,345', change: '+12%', changeType: 'increase' },
    { id: 2, name: 'Revenue', value: '$34,567', change: '+8%', changeType: 'increase' },
    { id: 3, name: 'Active Projects', value: '42', change: '-3%', changeType: 'decrease' },
    { id: 4, name: 'Conversion Rate', value: '3.2%', change: '+2%', changeType: 'increase' },
  ];

  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'Created a new project', time: '2 hours ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated dashboard settings', time: '4 hours ago' },
    { id: 3, user: 'Robert Johnson', action: 'Completed task "Design Homepage"', time: '6 hours ago' },
    { id: 4, user: 'Emily Davis', action: 'Added new team member', time: '1 day ago' },
    { id: 5, user: 'Michael Wilson', action: 'Deleted outdated files', time: '1 day ago' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button>Export Data</Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.id} className="h-full">
            <div className="flex flex-col">
              <div className="text-sm font-medium text-gray-500">{stat.name}</div>
              <div className="mt-1 flex items-baseline justify-between">
                <div className="text-2xl font-semibold">{stat.value}</div>
                <div className={`text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Revenue Overview" className="h-full">
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">Chart Placeholder</p>
          </div>
        </Card>

        <Card title="User Activity" className="h-full">
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">Chart Placeholder</p>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card title="Recent Activity" className="h-full">
        <div className="flow-root">
          <ul className="-my-5 divide-y divide-gray-200">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                      {activity.user.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {activity.user}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {activity.action}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {activity.time}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <Button variant="outline" className="w-full">View All Activity</Button>
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;