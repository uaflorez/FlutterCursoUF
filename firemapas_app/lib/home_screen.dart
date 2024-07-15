import 'package:flutter/material.dart';
import 'package:firemapas_app/check_permission.dart'; 
import 'package:cloud_firestore/cloud_firestore.dart';

class HomeScreen extends StatelessWidget {
  final FirebaseFirestore _firestore = FirebaseFirestore.instance; 

  HomeScreen({Key? key}) : super(key: key);

  void _addRandomPlaces() { 
    var places = [
      {
        "name": "Alicantie II", "latitude": 4.631228274334762,
        "longitude": -74.19731002328763,
      },
      
      {
        "name": "Taller", "latitude": 4.5868563140848435, 
        "longitude": -74.17054007780119,
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
