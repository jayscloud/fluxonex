'use client';

import { createPost } from '@/actions/blog';
import { useState } from 'react';

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') { // Simple hardcoded password for demo
            setIsAuthenticated(true);
        } else {
            alert('Invalid password');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-muted/30">
                <form onSubmit={handleLogin} className="bg-card p-8 rounded-xl border border-border shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Admin Password"
                        className="w-full px-4 py-2 rounded-lg border border-border mb-4"
                    />
                    <button type="submit" className="w-full bg-primary text-primary-foreground py-2 rounded-lg">
                        Login
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Create New Post</h2>
                <form action={async (formData) => {
                    const result = await createPost(formData);
                    if (result.success) {
                        alert('Post created successfully!');
                        // Reset form manually or redirect
                    } else {
                        alert('Error creating post');
                    }
                }} className="space-y-6">
                    <div>
                        <label className="block font-medium mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-border bg-background"
                            placeholder="Post Title"
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-2">Content (Markdown)</label>
                        <textarea
                            name="content"
                            required
                            rows={10}
                            className="w-full px-4 py-2 rounded-lg border border-border bg-background font-mono text-sm"
                            placeholder="# Heading\n\nWrite your content here..."
                        />
                    </div>
                    <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90">
                        Publish Post
                    </button>
                </form>
            </div>
        </div>
    );
}
