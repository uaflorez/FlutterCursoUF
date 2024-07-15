import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart'; 
import 'package:cloud_firestore/cloud_firestore.dart';

class MapScreen extends StatefulWidget { 
  const MapScreen({Key? key}) : super(key: key);

  @override
  State<MapScreen> createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> { 
  final Set<Marker> _markers = {};
  void _onMapCreated(GoogleMapController controller) { 
    FirebaseFirestore.instance.collection('places').snapshots().listen((snapshot){
      for (var doc in snapshot.docs) { 
        final place = doc.data(); setState(() {
          _markers.add( 
            Marker(
              markerId: MarkerId(doc.id),
              position: LatLng(place['latitude'], place['longitude']), infoWindow: InfoWindow(title: place['name']),
            ),
          );
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) { 
    return Scaffold(
      appBar: AppBar(title: const Text("Map View")), 
      body: GoogleMap(
        onMapCreated: _onMapCreated, 
        initialCameraPosition: const CameraPosition(
          target: LatLng(40.785091, -73.968285),
          zoom: 10,
        ),
        markers: _markers,
      ),
    );
  }
}

    

