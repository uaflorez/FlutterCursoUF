import 'package:flutter/material.dart';
import 'package:firemapas_app/check_permission.dart'; 
import 'package:cloud_firestore/cloud_firestore.dart';

class HomeScreen extends StatelessWidget {
  final FirebaseFirestore _firestore = FirebaseFirestore.instance; 

  HomeScreen({Key? key}) : super(key: key);

  void _addRandomPlaces() { 
    var places = [
      {
        "name": "Central Park", "latitude": 40.785091,
        "longitude": -73.968285,
      },
      {
        "name": "Golden Gate Park", "latitude": 37.769420,
        "longitude": -122.486213,
      },
    ];
    for (var place in places) {
      _firestore.collection('places').add(place);
    }
  }

  @override
  Widget build(BuildContext context) { 
    return Scaffold(
      appBar: AppBar( 
        title: const Text(
          'Explore Places',
        ),
      ),
      body: Center( 
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center, 
          children: [
            ElevatedButton(
              onPressed: _addRandomPlaces,
              child: const Text('Add Random Places'),
              ),
              ElevatedButton( 
                onPressed: () {
                  checkAndNavigate(context);
                },
                child: const Text('View Map'),
              ),
          ],
        ),
      ),
    );
  }
}
