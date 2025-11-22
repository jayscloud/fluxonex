'use server';

import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'src/data/posts.json');

// Helper to read data
async function getLocalData() {
    try {
        const data = await fs.readFile(DATA_FILE_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Helper to write data
async function saveLocalData(data: any) {
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

export async function getPosts() {
    const posts = await getLocalData();
    return posts.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function getPostBySlug(slug: string) {
    const posts = await getLocalData();
    return posts.find((p: any) => p.slug === slug) || null;
}

export async function createPost(formData: FormData) {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

    const newPost = {
        id: Date.now().toString(),
        title,
        content,
        slug,
        published: true,
        createdAt: new Date().toISOString(),
        comments: []
    };

    try {
        const posts = await getLocalData();
        posts.push(newPost);
        await saveLocalData(posts);
        revalidatePath('/blog');
        return { success: true };
    } catch (error) {
        console.error('Failed to create post:', error);
        return { success: false, error: 'Failed to create post' };
    }
}

export async function addComment(postId: string, formData: FormData) {
    const content = formData.get('content') as string;
    const author = formData.get('author') as string || 'Anonymous';

    const newComment = {
        id: Date.now().toString(),
        content,
        author,
        createdAt: new Date().toISOString()
    };

    try {
        const posts = await getLocalData();
        const postIndex = posts.findIndex((p: any) => p.id === postId);

        if (postIndex !== -1) {
            posts[postIndex].comments.unshift(newComment); // Add to top
            await saveLocalData(posts);
            revalidatePath('/blog');
            return { success: true };
        }
        return { success: false, error: 'Post not found' };
    } catch (error) {
        console.error('Failed to add comment:', error);
        return { success: false, error: 'Failed to add comment' };
    }
}
