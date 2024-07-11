import 'dart:convert';

import 'package:flutter/material.dart'; import 'package:http/http.dart' as http;
import 'package:flutter_secure_storage/flutter_secure_storage.dart'; import 'package:login_app/mocks/mocks_constants.dart';

class PostsPage extends StatelessWidget {
  final String apiURL = 'https://jsonplaceholder.typicode.com/posts'; 
  final storage = const FlutterSecureStorage();

  const PostsPage({super.key});

  Future<List> fetchPosts() async {
    String token = await storage.read(key: 'auth_token') ?? ''; 
    if (token != mockToken) {
      throw Exception('Unauthorized');
    }
    
    var response = await http.get(Uri.parse(apiURL)); 
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load posts');
    }
  }

  @override
  Widget build(BuildContext context) { 
    return Scaffold(
      appBar: AppBar(title: const Text("Posts")), 
      body: FutureBuilder<List>(
        future: fetchPosts(), 
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) { 
            return const Center(child: CircularProgressIndicator());
            } else if (snapshot.hasError) {
              return Center(child: Text("Error: ${snapshot.error}"));
            }
            return ListView.builder(
              itemCount: snapshot.data?.length ?? 0, 
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(snapshot.data?[index]['title'] ?? ''),
                  subtitle: Text(snapshot.data?[index]['body'] ?? ''),
                );
              },
            );
          },
        ),
    );
  }
}
